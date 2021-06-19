﻿/*
 * Copyright © 2013-2014 Microsoft Mobile. All rights reserved.
 * Nokia and Nokia Connecting People are registered trademarks of Nokia Corporation. 
 * Other product and company names mentioned herein may be trademarks
 * or trade names of their respective owners. 
 * See LICENSE.TXT for license information.
 */

using MagnifierApp.Models;
using MagnifierApp.Resources;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;
using Nokia.Graphics.Imaging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using Windows.Storage.Streams;

namespace MagnifierApp.Pages
{
    public partial class CropPage : PhoneApplicationPage
    {
        #region Members

        private ApplicationBarIconButton _acceptButton = null;
        private BitmapImage _bitmap = new BitmapImage();
        private double _scale = 1.0;
        private bool _pinching = false;
        private Point _relativeCenter;

        private StreamImageSource _source = null;
        private ImageProviderInfo _info = null;

        #endregion Members

        #region Properties

        #endregion Properties

        public CropPage()
        {
            InitializeComponent();

            // Accept button

            _acceptButton = new ApplicationBarIconButton()
            {
                IconUri = new Uri("/Assets/Icons/check.png", UriKind.Relative),
                Text = AppResources.CropPage_AcceptButton_Text
            };

            _acceptButton.Click += CropButton_Click;

            ApplicationBar.Buttons.Add(_acceptButton);
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            base.OnNavigatedTo(e);

            if (PhotoModel.Singleton.Original != null)
            {
                BeginSession(PhotoModel.Singleton.Original);
            }
            else
            {
                BeginSession(PhotoModel.Singleton.Image);
            }

            Image.Source = _bitmap;
        }

        protected override void OnNavigatedFrom(NavigationEventArgs e)
        {
            base.OnNavigatedFrom(e);

            EndSession();

            Image.Source = null;
        }

        private void CropButton_Click(object sender, EventArgs e)
        {
            GeneralTransform transform = Crop.TransformToVisual(Image);

            var topLeftWindowsPoint = transform.Transform(new Point(0, 0));
            topLeftWindowsPoint.X /= _scale;
            topLeftWindowsPoint.Y /= _scale;

            var bottomRightWindowsPoint = transform.Transform(new Point(Crop.Width, Crop.Height));
            bottomRightWindowsPoint.X /= _scale;
            bottomRightWindowsPoint.Y /= _scale;

            var topLeftFoundationPoint = new Windows.Foundation.Point(Math.Round(topLeftWindowsPoint.X), Math.Round(topLeftWindowsPoint.Y));
            var bottomRightFoundationPoint = new Windows.Foundation.Point(Math.Round(bottomRightWindowsPoint.X), Math.Round(bottomRightWindowsPoint.Y));

            var reframingFilter = new ReframingFilter()
            {
                ReframingArea = new Windows.Foundation.Rect(topLeftFoundationPoint, bottomRightFoundationPoint)
            };

            var filterEffect = new FilterEffect(_source)
            {
                Filters = new List<IFilter>() { reframingFilter }
            };

            var renderer = new JpegRenderer(filterEffect)
            {
                OutputOption = OutputOption.PreserveAspectRatio,
                Quality = 1.0,
                Size = new Windows.Foundation.Size(bottomRightFoundationPoint.X - topLeftFoundationPoint.X, bottomRightFoundationPoint.Y - topLeftFoundationPoint.Y)
            };

            IBuffer buffer = null;

            Task.Run(async () => { buffer = await renderer.RenderAsync(); }).Wait();

            PhotoModel.Singleton.FromNewCrop(buffer.AsStream());

            NavigationService.GoBack();
        }

        private void Viewport_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            ConfigureViewport();
        }

        private void BeginSession(Stream image)
        {
            // Initialize session with image

            using (var memoryStream = new MemoryStream())
            {
                image.Position = 0;
                image.CopyTo(memoryStream);

                try
                {
                    // Some streams do not support flushing

                    image.Flush();
                }
                catch (Exception ex)
                {
                }

                memoryStream.Position = 0;

                // Initialize image source

                _source = new StreamImageSource(memoryStream);

                // Get image info

                Task.Run(async () => { _info = await _source.GetInfoAsync(); }).Wait();

                // Set _lowResolutionBitmap decoding to a quite low resolution and initialize it with image
                if (_info.ImageSize.Width >= _info.ImageSize.Height)
                {
                    _bitmap.DecodePixelWidth = 1536;
                    _bitmap.DecodePixelHeight = 0;
                }
                else
                {
                    _bitmap.DecodePixelWidth = 0;
                    _bitmap.DecodePixelHeight = 1536;
                }

                image.Position = 0;

                _bitmap.SetSource(image);
            }
        }

        private void EndSession()
        {
            if (_source != null)
            {
                _source.Dispose();
                _source = null;
            }

            _info = null;
        }

        private void ConfigureViewport()
        {
            if (_info.ImageSize.Width < _info.ImageSize.Height)
            {
                _scale = Crop.Width / _info.ImageSize.Width;
            }
            else
            {
                _scale = Crop.Height / _info.ImageSize.Height;
            }

            Image.Width = _info.ImageSize.Width * _scale;
            Image.Height = _info.ImageSize.Height * _scale;
            Image.Margin = new Thickness()
            {
                Left = Math.Max(0, (ContentPanel.ActualWidth - Crop.Width) / 2),
                Right = Math.Max(0, (ContentPanel.ActualWidth - Crop.Width) / 2),
                Top = Math.Max(0, (ContentPanel.ActualHeight - Crop.Height) / 2),
                Bottom = Math.Max(0, (ContentPanel.ActualHeight - Crop.Height) / 2)
            };

            Viewport.Bounds = new Rect(0, 0, Image.Width + Image.Margin.Left + Image.Margin.Right, Image.Height + Image.Margin.Top + Image.Margin.Bottom);
            Viewport.SetViewportOrigin(new Point(
                Viewport.Bounds.Width / 2 - Crop.Width / 2,
                Viewport.Bounds.Height / 2 - Crop.Height / 2));
        }

        private void Viewport_ManipulationStarted(object sender, ManipulationStartedEventArgs e)
        {
            if (_pinching)
            {
                e.Handled = true;

                CompletePinching();
            }
        }

        private void Viewport_ManipulationDelta(object sender, ManipulationDeltaEventArgs e)
        {
            if (e.PinchManipulation != null)
            {
                e.Handled = true;

                if (!_pinching)
                {
                    _pinching = true;

                    _relativeCenter = new Point(
                        e.PinchManipulation.Original.Center.X / Image.Width,
                        e.PinchManipulation.Original.Center.Y / Image.Height);
                }

                double w, h;

                if (_info.ImageSize.Width < _info.ImageSize.Height)
                {
                    w = _info.ImageSize.Width * _scale * e.PinchManipulation.CumulativeScale;
                    w = Math.Max(Crop.Width, w);
                    w = Math.Min(w, _info.ImageSize.Width);
                    w = Math.Min(w, 4096);

                    h = w * _info.ImageSize.Height / _info.ImageSize.Width;

                    if (h > 4096)
                    {
                        var scaler = 4096.0 / h;
                        h *= scaler;
                        w *= scaler;
                    }
                }
                else
                {
                    h = _info.ImageSize.Height * _scale * e.PinchManipulation.CumulativeScale;
                    h = Math.Max(Crop.Height, h);
                    h = Math.Min(h, _info.ImageSize.Height);
                    h = Math.Min(h, 4096);

                    w = h * _info.ImageSize.Width / _info.ImageSize.Height;

                    if (w > 4096)
                    {
                        var scaler = 4096.0 / w;
                        w *= scaler;
                        h *= scaler;
                    }
                }

                Image.Width = w;
                Image.Height = h;

                Viewport.Bounds = new Rect(0, 0, w + Image.Margin.Left + Image.Margin.Right, h + Image.Margin.Top + Image.Margin.Bottom);

                GeneralTransform transform = Image.TransformToVisual(Viewport);
                Point p = transform.Transform(e.PinchManipulation.Original.Center);

                double x = _relativeCenter.X * w - p.X + Image.Margin.Left;
                double y = _relativeCenter.Y * h - p.Y + Image.Margin.Top;

                if (w < _info.ImageSize.Width && h < _info.ImageSize.Height)
                {
                    //System.Diagnostics.Debug.WriteLine("Viewport.ActualWidth={0} .ActualHeight={1} Origin.X={2} .Y={3} Image.Width={4} .Height={5}",
                    //    Viewport.ActualWidth, Viewport.ActualHeight, x, y, Image.Width, Image.Height);

                    Viewport.SetViewportOrigin(new Point(x, y));
                }
            }
            else if (_pinching)
            {
                e.Handled = true;

                CompletePinching();
            }
        }

        private void Viewport_ManipulationCompleted(object sender, ManipulationCompletedEventArgs e)
        {
            if (_pinching)
            {
                e.Handled = true;

                CompletePinching();
            }
        }

        private void CompletePinching()
        {
            _pinching = false;

            double sw = Image.Width / _info.ImageSize.Width;
            double sh = Image.Height / _info.ImageSize.Height;

            _scale = Math.Min(sw, sh);
        }

        private void Viewport_ManipulationStateChanged(object sender, ManipulationStateChangedEventArgs e)
        {
            // Viewport sometimes does not animate correctly back to the content area,
            // so here we fix it if that happens

            if (Viewport.ManipulationState == ManipulationState.Idle)
            {
                if (Viewport.Viewport.X < 0)
                {
                    Viewport.SetViewportOrigin(new Point(0, Viewport.Viewport.Y));
                }
                else if (Viewport.Viewport.X > Image.Width - Viewport.Viewport.Width)
                {
                    Viewport.SetViewportOrigin(new Point(Image.Width - Viewport.Width, Viewport.Viewport.Y));
                }

                if (Viewport.Viewport.Y < 0)
                {
                    Viewport.SetViewportOrigin(new Point(Viewport.Viewport.X, 0));
                }
                else if (Viewport.Viewport.Y > Image.Height - Viewport.Viewport.Height)
                {
                    Viewport.SetViewportOrigin(new Point(Viewport.Viewport.X, Image.Height - Viewport.Height));
                }
            }
        }
    }
}