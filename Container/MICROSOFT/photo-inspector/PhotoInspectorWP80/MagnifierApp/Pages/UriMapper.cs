﻿/*
 * Copyright © 2013-2014 Microsoft Mobile. All rights reserved.
 * Nokia and Nokia Connecting People are registered trademarks of Nokia Corporation. 
 * Other product and company names mentioned herein may be trademarks
 * or trade names of their respective owners. 
 * See LICENSE.TXT for license information.
 */

using MagnifierApp.Models;
using MagnifierApp.Utilities;
using Microsoft.Phone.Info;
using System;
using System.Linq;
using System.Windows.Navigation;
using Windows.Phone.Media.Capture;

namespace MagnifierApp.Pages
{
    public class UriMapper : UriMapperBase
    {
        public override Uri MapUri(Uri uri)
        {
            string tempUri = uri.ToString();

            if (tempUri.Contains("RichMediaEdit") && tempUri.Contains("token"))
            {
                tempUri += "&editor";

                return new Uri(tempUri.Replace("PhotosPage", "MagnifierPage"), UriKind.Relative);
            }
            else if (tempUri.Contains("EditPhotoContent") && tempUri.Contains("FileId"))
            {
                tempUri += "&editor";

                return new Uri(tempUri.Replace("PhotosPage", "MagnifierPage"), UriKind.Relative);
            }
            else if (tempUri.Contains("ViewfinderLaunch"))
            {
                tempUri += "&lense";

                return new Uri(tempUri.Replace("PhotosPage", "ViewfinderPage"), UriKind.Relative);
            }

            return uri;
        }
    }
}
