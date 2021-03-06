using System;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Windows;
using System.Device.Location;
using System.Net;


/// <summary>
/// The GuidanceDriveTask allows you to start the Drive navigation application. 
/// Launching this task requires the Destination coordinates to be set, additionally the destination can be given name supplied with the Title string. The Driving guidance navigation starts from the users current position, so no starting location can be set
/// </summary>
/// <param name="Destination">Destination coordinate(required)</param>
/// <param name="Title">Destination title</param>
/// 


namespace Nokia.Phone.HereLaunchers
{
    public sealed class GuidanceDriveTask : TaskBase
    {
        /// <summary>
        /// Gets or sets the Destination coordinates.
        /// </summary>
        /// <value>
        /// The Destination coordinates as GeoCoordinate.
        /// </value>
        public GeoCoordinate Destination { get; set; }

        /// <summary>
        /// Gets or sets the Destination Title.
        /// </summary>
        /// <value>
        /// The Destination Title string.
        /// </value>
        public string Title { get; set; }

        /// <summary>
        /// Shows walking guidance
        /// </summary>
        public void Show()
        {
            if (this.Destination != null)
            {
                string latStr = this.Destination.Latitude.ToString(System.Globalization.CultureInfo.InvariantCulture);
                string lonStr = this.Destination.Longitude.ToString(System.Globalization.CultureInfo.InvariantCulture);

               string UrlToUse = "guidance-drive://v2.0/navigate/destination/?latlon=" + latStr + "," + lonStr;

                if (!string.IsNullOrEmpty(this.Title))
                {
                    string encodedName = Uri.EscapeDataString(this.Title);
                    UrlToUse = UrlToUse + "&title=" + encodedName;
                }

                //There is no nokia specific Drive protocol, thus using Fallback with nokia as well
                this.Launch(new Uri(UrlToUse));
            }
            else
            {
                throw new InvalidOperationException("Please set an destination coordinates before calling Show()");
            }
        }
    }
}