/**
 * Copyright (c) 2012-2014 Microsoft Mobile.
 */

using CarTrumps.Resources;

namespace CarTrumps
{
    /// <summary>
    /// Provides access to string resources.
    /// </summary>
    public class LocalizedStrings
    {
        private static AppResources _localizedResources = new AppResources();

        public AppResources LocalizedResources { get { return _localizedResources; } }
    }
}