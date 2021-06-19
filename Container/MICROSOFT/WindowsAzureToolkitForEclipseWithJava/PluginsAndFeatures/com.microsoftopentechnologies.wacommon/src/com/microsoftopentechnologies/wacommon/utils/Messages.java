/**
 * Copyright (c) Microsoft Corporation
 * 
 * All rights reserved. 
 * 
 * MIT License
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
 * (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, 
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
 * ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH 
 * THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
package com.microsoftopentechnologies.wacommon.utils;


import org.eclipse.osgi.util.NLS;

public final class Messages extends NLS {
    private static final String BUNDLE_NAME =
    		"com.microsoftopentechnologies.wacommon.utils.messages";
    
    /* Common messages - start */
	public static String pluginFolder;
	public static String waCommonFolderID;
	public static String commonPluginID;
	public static String dataFileName;
	public static String dataFileEntry;
	public static String telAgrEvtName;
	public static String preferenceQueMsg;
	public static String preferenceQueTtl;
	public static String lnkOpenErrMsg;
	public static String encFileName;
	public static String encFileEntry;
	public static String version;
	public static String instID;
	public static String prefVal;
	public static String preferenceMsg;
	public static String preferenceLinkMsg;
	/* Common messages - end */
	
    /* Base64 messages - start */
	public static String base64InvldStr;
	/* Base64 messages - end */
	public static String nameNtErMsg;
	public static String nameGetErMsg;
	public static String pubUrlNtErMsg;
	public static String pubUrlGetErMsg;
	public static String portUrlGetErMsg;
	public static String blbUrlNtErMsg;
	public static String blbUrlGetErMsg;
	public static String mngUrlNtErMsg;
	public static String mngUrlGetErMsg;
	public static String parseErMsg;
	public static String inValArg;
	public static String err;
	public static String prefFileName;
	public static String bundleName;
	public static String nameSetErMsg;
	public static String saveErMsg;
	public static String prefSaveErMsg;
	public static String sdkLibBundleName;
	public static String SDKLocErrMsg;
	public static String sdkLibBaseJar;
	public static String cmdUtilErrMsg;
	public static String resCLExWkspRfrsh;
	public static String cmhLblStrgAcc;
	public static String cmhPropFor;
	public static String rolsDlgErr;
	public static String projDlgErrMsg;
	public static String aiTxt;
	
    static {
        // initialize resource bundle
        NLS.initializeMessages(BUNDLE_NAME, Messages.class);
    }

    private Messages() {
        super();
    }
}
