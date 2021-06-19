﻿/**
 * Copyright (c) 2013-2014 Microsoft Mobile. All rights reserved.
 *
 * Nokia, Nokia Connecting People, Nokia Developer, and HERE are trademarks
 * and/or registered trademarks of Nokia Corporation. Other product and company
 * names mentioned herein may be trademarks or trade names of their respective
 * owners.
 *
 * See the license text file delivered with this project for more information.
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;

namespace DrumkitX
{
    /// <summary>
    /// Page for displaying application information.
    /// </summary>
    public partial class AboutPage : PhoneApplicationPage
    {
        /// <summary>
        /// Constructor.
        /// </summary>
        public AboutPage()
        {
            InitializeComponent();
            UpdateVersionString();
        }

        /// <summary>
        /// Updates VersionText to contain correct version info.
        /// </summary>
        private void UpdateVersionString()
        {
            string appVersion = System.Xml.Linq.XDocument.Load("WMAppManifest.xml").Root.Element("App").Attribute("Version").Value;
            VersionText.Text = "Version " + appVersion;
        }
    }
}