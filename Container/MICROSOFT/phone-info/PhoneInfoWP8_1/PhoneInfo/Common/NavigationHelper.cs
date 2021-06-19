﻿using System;
using System.Collections.Generic;
using Windows.System;
using Windows.UI.Core;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;

namespace PhoneInfo.Common
{
    /// <summary>
    /// Represents the method that will handle the <see cref="NavigationHelper.LoadState"/> event.
    /// </summary>
    public delegate void LoadStateEventHandler(object sender, LoadStateEventArgs e);

    /// <summary>
    /// Represents the method that will handle the <see cref="NavigationHelper.SaveState"/> event.
    /// </summary>
    public delegate void SaveStateEventHandler(object sender, SaveStateEventArgs e);

    /// <summary>
    /// NavigationHelper aids in navigation between pages. It provides commands used to
    /// navigate back and forward as well as registers for standard mouse and keyboard
    /// shortcuts used to go back and forward.  In addition it integrates SuspensionManger
    /// to handle process lifetime management and state management when navigating between
    /// pages.
    /// </summary>
    /// <example>
    /// To make use of NavigationHelper, follow these two steps or start with a BasicPage
    /// or any other Page item template other than BlankPage.
    /// <para>
    /// 1) Create an instance of the NavigationHelper somewhere such as in the 
    ///     constructor for the page and register a callback for the LoadState and 
    ///     SaveState events.
    /// <code>
    ///     public MyPage()
    ///     {
    ///         this.InitializeComponent();
    ///         var navigationHelper = new NavigationHelper(this);
    ///         this.navigationHelper.LoadState += navigationHelper_LoadState;
    ///         this.navigationHelper.SaveState += navigationHelper_SaveState;
    ///     }
    ///     
    ///     private async void navigationHelper_LoadState(object sender, LoadStateEventArgs e)
    ///     { }
    ///     private async void navigationHelper_SaveState(object sender, LoadStateEventArgs e)
    ///     { }
    /// </code>
    /// </para>
    /// <para>
    /// 2) Register the page to call into the NavigationManager whenever the page participates 
    ///     in navigation by overriding the <see cref="Windows.UI.Xaml.Controls.Page.OnNavigatedTo"/> 
    ///     and <see cref="Windows.UI.Xaml.Controls.Page.OnNavigatedFrom"/> events.
    /// <code>
    ///     protected override void OnNavigatedTo(NavigationEventArgs e)
    ///     {
    ///         navigationHelper.OnNavigatedTo(e);
    ///     }
    ///     
    ///     protected override void OnNavigatedFrom(NavigationEventArgs e)
    ///     {
    ///         navigationHelper.OnNavigatedFrom(e);
    ///     }
    /// </code>
    /// </para>
    /// </example>
    [Windows.Foundation.Metadata.WebHostHidden]
    public class NavigationHelper : DependencyObject
    {
        private readonly Page page;
        private RelayCommand goBackCommand;
        private RelayCommand goForwardCommand;
        private string pageKey;

        /// <summary>
        /// Initializes a new instance of the <see cref="NavigationHelper"/> class.
        /// </summary>
        /// <param name="page">
        /// A reference to the current page used for navigation.
        /// This reference allows for frame manipulation and to ensure that keyboard 
        /// navigation requests only occur when the page is occupying the entire window.
        /// </param>
        public NavigationHelper(Page page)
        {
            this.page = page;

            // When this page is part of the visual tree make two changes:
            // 1) Map application view state to visual state for the page
            // 2) Handle keyboard and mouse navigation requests
            this.page.Loaded += (sender, e) =>
            {
                // Keyboard and mouse navigation only apply when occupying the entire window
                if (this.page.ActualHeight == Window.Current.Bounds.Height &&
                    this.page.ActualWidth == Window.Current.Bounds.Width)
                {
                    // Listen to the window directly so focus isn't required
                    Window.Current.CoreWindow.Dispatcher.AcceleratorKeyActivated +=
                        CoreDispatcher_AcceleratorKeyActivated;
                    Window.Current.CoreWindow.PointerPressed +=
                        this.CoreWindow_PointerPressed;
                }
            };

            // Undo the same changes when the page is no longer visible
            this.page.Unloaded += (sender, e) =>
            {
                Window.Current.CoreWindow.Dispatcher.AcceleratorKeyActivated -=
                    CoreDispatcher_AcceleratorKeyActivated;
                Window.Current.CoreWindow.PointerPressed -=
                    this.CoreWindow_PointerPressed;
            };
        }

        /// <summary>
        /// Register this event on the current page to populate the page
        /// with content passed during navigation as well as any saved
        /// state provided when recreating a page from a prior session.
        /// </summary>
        public event LoadStateEventHandler LoadState;

        /// <summary>
        /// Register this event on the current page to preserve
        /// state associated with the current page in case the
        /// application is suspended or the page is discarded from
        /// the navigation cache.
        /// </summary>
        public event SaveStateEventHandler SaveState;

        /// <summary>
        /// Gets or sets the <see cref="RelayCommand"/> used to bind to the back Button's Command
        /// property for navigating to the most recent item in back navigation history, if a Frame
        /// manages its own navigation history.
        /// <para>
        /// The <see cref="RelayCommand"/> is set up to use the virtual method <see cref="GoBack"/>
        /// as the Execute Action and <see cref="CanGoBack"/> for CanExecute.
        /// </para>
        /// </summary>
        public RelayCommand GoBackCommand
        {
            get
            {
                if (this.goBackCommand == null)
                {
                    this.goBackCommand = new RelayCommand(
                        () => this.GoBack(),
                        () => this.CanGoBack());
                }

                return this.goBackCommand;
            }

            set
            {
                this.goBackCommand = value;
            }
        }

        /// <summary>
        /// Gets the <see cref="RelayCommand"/> used for navigating to the most recent item in
        /// the forward navigation history, if a Frame manages its own navigation history.
        /// <para>
        /// The <see cref="RelayCommand"/> is set up to use the virtual method <see cref="GoForward"/>
        /// as the Execute Action and <see cref="CanGoForward"/> for CanExecute.
        /// </para>
        /// </summary>
        public RelayCommand GoForwardCommand
        {
            get
            {
                if (this.goForwardCommand == null)
                {
                    this.goForwardCommand = new RelayCommand(
                        () => this.GoForward(),
                        () => this.CanGoForward());
                }

                return this.goForwardCommand;
            }
        }

        private Frame Frame
        {
            get { return this.page.Frame; }
        }

        /// <summary>
        /// Virtual method used by the <see cref="GoBackCommand"/> property
        /// to determine if the <see cref="Frame"/> can go back.
        /// </summary>
        /// <returns>
        /// True if the <see cref="Frame"/> has at least one entry 
        /// in the back navigation history.
        /// </returns>
        public virtual bool CanGoBack()
        {
            return this.Frame != null && this.Frame.CanGoBack;
        }

        /// <summary>
        /// Virtual method used by the <see cref="GoForwardCommand"/> property
        /// to determine if the <see cref="Frame"/> can go forward.
        /// </summary>
        /// <returns>
        /// True if the <see cref="Frame"/> has at least one entry 
        /// in the forward navigation history.
        /// </returns>
        public virtual bool CanGoForward()
        {
            return this.Frame != null && this.Frame.CanGoForward;
        }

        /// <summary>
        /// Virtual method used by the <see cref="GoBackCommand"/> property
        /// to invoke the <see cref="Windows.UI.Xaml.Controls.Frame.GoBack"/> method.
        /// </summary>
        public virtual void GoBack()
        {
            if (this.Frame != null && this.Frame.CanGoBack)
            {
                this.Frame.GoBack();
            }
        }

        /// <summary>
        /// Virtual method used by the <see cref="GoForwardCommand"/> property
        /// to invoke the <see cref="Windows.UI.Xaml.Controls.Frame.GoForward"/> method.
        /// </summary>
        public virtual void GoForward()
        {
            if (this.Frame != null && this.Frame.CanGoForward)
            {
                this.Frame.GoForward();
            }
        }

        /// <summary>
        /// Invoked when this page is about to be displayed in a Frame.  
        /// This method calls <see cref="LoadState"/>, where all page specific
        /// navigation and process lifetime management logic should be placed.
        /// </summary>
        /// <param name="e">Event data that describes how this page was reached.
        /// This parameter is typically used to configure the page.</param>
        public void OnNavigatedTo(NavigationEventArgs e)
        {
            var frameState = SuspensionManager.SessionStateForFrame(this.Frame);
            this.pageKey = "Page-" + this.Frame.BackStackDepth;

            if (e.NavigationMode == NavigationMode.New)
            {
                // Clear existing state for forward navigation when adding a new page to the
                // navigation stack
                var nextPageKey = this.pageKey;
                int nextPageIndex = this.Frame.BackStackDepth;
                while (frameState.Remove(nextPageKey))
                {
                    nextPageIndex++;
                    nextPageKey = "Page-" + nextPageIndex;
                }

                // Pass the navigation parameter to the new page
                if (this.LoadState != null)
                {
                    this.LoadState(this, new LoadStateEventArgs(e.Parameter, null));
                }
            }
            else
            {
                // Pass the navigation parameter and preserved page state to the page, using
                // the same strategy for loading suspended state and recreating pages discarded
                // from cache
                if (this.LoadState != null)
                {
                    this.LoadState(this, new LoadStateEventArgs(e.Parameter, (Dictionary<string, object>)frameState[this.pageKey]));
                }
            }
        }

        /// <summary>
        /// Invoked when this page will no longer be displayed in a Frame.
        /// This method calls <see cref="SaveState"/>, where all page specific
        /// navigation and process lifetime management logic should be placed.
        /// </summary>
        public void OnNavigatedFrom(NavigationEventArgs e)
        {
            var frameState = SuspensionManager.SessionStateForFrame(this.Frame);
            var pageState = new Dictionary<string, object>();
            if (this.SaveState != null)
            {
                this.SaveState(this, new SaveStateEventArgs(pageState));
            }

            frameState[this.pageKey] = pageState;
        }

        /// <summary>
        /// Invoked on every keystroke, including system keys such as Alt key combinations, when
        /// this page is active and occupies the entire window.  Used to detect keyboard navigation
        /// between pages even when the page itself doesn't have focus.
        /// </summary>
        /// <param name="sender">Instance that triggered the event.</param>
        /// <param name="e">Event data describing the conditions that led to the event.</param>
        private void CoreDispatcher_AcceleratorKeyActivated(CoreDispatcher sender, AcceleratorKeyEventArgs e)
        {
            var virtualKey = e.VirtualKey;

            // Only investigate further when Left, Right, or the dedicated Previous or Next keys
            // are pressed
            if ((e.EventType == CoreAcceleratorKeyEventType.SystemKeyDown ||
                e.EventType == CoreAcceleratorKeyEventType.KeyDown) &&
                (virtualKey == VirtualKey.Left || virtualKey == VirtualKey.Right ||
                (int)virtualKey == 166 || (int)virtualKey == 167))
            {
                var coreWindow = Window.Current.CoreWindow;
                var downState = CoreVirtualKeyStates.Down;
                bool menuKey = (coreWindow.GetKeyState(VirtualKey.Menu) & downState) == downState;
                bool controlKey = (coreWindow.GetKeyState(VirtualKey.Control) & downState) == downState;
                bool shiftKey = (coreWindow.GetKeyState(VirtualKey.Shift) & downState) == downState;
                bool noModifiers = !menuKey && !controlKey && !shiftKey;
                bool onlyAlt = menuKey && !controlKey && !shiftKey;

                if (((int)virtualKey == 166 && noModifiers) ||
                    (virtualKey == VirtualKey.Left && onlyAlt))
                {
                    // When the previous key or Alt+Left are pressed navigate back
                    e.Handled = true;
                    this.GoBackCommand.Execute(null);
                }
                else if (((int)virtualKey == 167 && noModifiers) ||
                    (virtualKey == VirtualKey.Right && onlyAlt))
                {
                    // When the next key or Alt+Right are pressed navigate forward
                    e.Handled = true;
                    this.GoForwardCommand.Execute(null);
                }
            }
        }

        /// <summary>
        /// Invoked on every mouse click, touch screen tap, or equivalent interaction when this
        /// page is active and occupies the entire window.  Used to detect browser-style next and
        /// previous mouse button clicks to navigate between pages.
        /// </summary>
        /// <param name="sender">Instance that triggered the event.</param>
        /// <param name="e">Event data describing the conditions that led to the event.</param>
        private void CoreWindow_PointerPressed(CoreWindow sender, PointerEventArgs e)
        {
            var properties = e.CurrentPoint.Properties;

            // Ignore button chords with the left, right, and middle buttons
            if (properties.IsLeftButtonPressed
                || properties.IsRightButtonPressed
                || properties.IsMiddleButtonPressed)
            {
                return;
            }

            // If back or foward are pressed (but not both) navigate appropriately
            bool backPressed = properties.IsXButton1Pressed;
            bool forwardPressed = properties.IsXButton2Pressed;
            if (backPressed ^ forwardPressed)
            {
                e.Handled = true;
                if (backPressed)
                {
                    this.GoBackCommand.Execute(null);
                }

                if (forwardPressed)
                {
                    this.GoForwardCommand.Execute(null);
                }
            }
        }
    }

    /// <summary>
    /// Holds the event data required when a page attempts to load state.
    /// </summary>
    public class LoadStateEventArgs : EventArgs
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LoadStateEventArgs"/> class.
        /// </summary>
        /// <param name="navigationParameter">
        /// The parameter value passed to <see cref="Frame.Navigate(Type, Object)"/>
        /// when this page was initially requested.
        /// </param>
        /// <param name="pageState">
        /// A dictionary of state preserved by this page during an earlier
        /// session. This will be null the first time a page is visited.
        /// </param>
        public LoadStateEventArgs(object navigationParameter, Dictionary<string, object> pageState)
            : base()
        {
            this.NavigationParameter = navigationParameter;
            this.PageState = pageState;
        }

        /// <summary>
        /// Gets the parameter value passed to <see cref="Frame.Navigate(Type, Object)"/> 
        /// when this page was initially requested.
        /// </summary>
        public object NavigationParameter { get; private set; }

        /// <summary>
        /// Gets a dictionary of state preserved by this page during an earlier
        /// session. This will be null the first time a page is visited.
        /// </summary>
        public Dictionary<string, object> PageState { get; private set; }
    }

    /// <summary>
    /// Holds the event data required when a page attempts to save state.
    /// </summary>
    public class SaveStateEventArgs : EventArgs
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SaveStateEventArgs"/> class.
        /// </summary>
        /// <param name="pageState">An empty dictionary to be populated with serializable state.</param>
        public SaveStateEventArgs(Dictionary<string, object> pageState)
            : base()
        {
            this.PageState = pageState;
        }

        /// <summary>
        /// Gets an empty dictionary to be populated with serializable state.
        /// </summary>
        public Dictionary<string, object> PageState { get; private set; }
    }
}
