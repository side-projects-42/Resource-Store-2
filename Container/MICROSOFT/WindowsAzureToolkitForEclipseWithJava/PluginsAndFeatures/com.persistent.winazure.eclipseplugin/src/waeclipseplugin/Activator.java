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

package waeclipseplugin;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.swing.event.EventListenerList;

import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.ui.console.ConsolePlugin;
import org.eclipse.ui.console.IConsole;
import org.eclipse.ui.console.IConsoleManager;
import org.eclipse.ui.console.MessageConsole;
import org.eclipse.ui.plugin.AbstractUIPlugin;
import org.osgi.framework.BundleContext;

import com.interopbridges.tools.windowsazure.WindowsAzureProjectManager;
import com.interopbridges.tools.windowsazure.WindowsAzureRole;
import com.microsoftopentechnologies.azurecommons.deploy.DeploymentEventArgs;
import com.microsoftopentechnologies.azurecommons.deploy.DeploymentEventListener;
import com.microsoftopentechnologies.azurecommons.deploy.UploadProgressEventArgs;
import com.microsoftopentechnologies.azurecommons.deploy.UploadProgressEventListener;

/**
 * The activator class controls the plug-in life cycle
 */
public class Activator extends AbstractUIPlugin {

    // The plug-in ID
    public static final String PLUGIN_ID = "WAEclipsePlugin"; //$NON-NLS-1$

    public static boolean IS_WINDOWS = System.getProperty("os.name").toLowerCase().indexOf("win") >= 0;

    // The shared instance
    private static Activator plugin;

    private WindowsAzureProjectManager waProjMgr;
    private WindowsAzureRole waRole;
    private boolean isEdit;
    private boolean isSaved;
    private boolean isContextMenu = false;
    /**
     * Variables to track, if have came to remote access page from
     * Publish wizard's Encryption link.
     * Then store values entered by user on wizard to
     * populate on remote access page.
     */
    public static boolean isFrmEncLink = false;
    public static String pubPwd;
    public static String pubUname;
    public static String pubCnfPwd;
    
    public static final String SETTINGS_FILE_NAME = Messages.settingsFileName;
	
	public static final String CONSOLE_NAME = Messages.consoleName;

	public static final String DEPLOY_IMAGE = Messages.deploytoAzureImg;

	private static final EventListenerList DEPLOYMENT_EVENT_LISTENERS = new EventListenerList();
	
	private static final EventListenerList UPLOAD_PROGRESS_EVENT_LISTENERS = new EventListenerList();
	public static List<DeploymentEventListener> depEveList = new ArrayList<DeploymentEventListener>();

    /**
     * The constructor
     */
    public Activator() {
    }

    /*
     * (non-Javadoc)
     * @see org.eclipse.ui.plugin.AbstractUIPlugin#start(org.osgi.framework.BundleContext)
     */
    public void start(BundleContext context) throws Exception {
        super.start(context);
        plugin = this;
    }

    /*
     * (non-Javadoc)
     * @see org.eclipse.ui.plugin.AbstractUIPlugin#stop(org.osgi.framework.BundleContext)
     */
    public void stop(BundleContext context) throws Exception {
        plugin = null;
        super.stop(context);
    }

    /**
     * Returns the shared instance
     *
     * @return the shared instance
     */
    public static Activator getDefault() {
        return plugin;
    }

    public void log(String message, Exception excp) {
        getLog().log(new Status(IStatus.ERROR, PLUGIN_ID, message, excp));
    }
    
    public void log(String message) {
		getLog().log(new Status(IStatus.ERROR, PLUGIN_ID, message));
	}


    public WindowsAzureProjectManager getWaProjMgr() {
        return waProjMgr;
    }
    
    public void log(String message, Throwable excp) {
		getLog().log(new Status(IStatus.ERROR, PLUGIN_ID, message, excp));
	}


    public void setWaProjMgr(WindowsAzureProjectManager waProjMgr) {
        if (waProjMgr == null) {
            throw new IllegalArgumentException();
        }
        getDefault().waProjMgr = waProjMgr;
    }

    public WindowsAzureRole getWaRole() {
        return waRole;
    }

    public void setWaRole(WindowsAzureRole waRole) {
        if (waRole == null) {
            throw new IllegalArgumentException();
        }
        getDefault().waRole = waRole;
    }

    public boolean isEdit() {
        return isEdit;
    }

    public void setEdit(boolean isEdit) {
        getDefault().isEdit = isEdit;
    }

    public boolean isSaved() {
        return isSaved;
    }

    public void setSaved(boolean var) {
        getDefault().isSaved = var;
    }

    public boolean isContextMenu() {
        return isContextMenu;
    }

    public void setContextMenu(boolean isContextMenu) {
        this.isContextMenu = isContextMenu;
    }
    
    public static ImageDescriptor getImageDescriptor(String location)
			throws IOException {
		URL url = Activator.getDefault().getBundle().getEntry(location);
		URL fileURL = FileLocator.toFileURL(url);
		URL resolve = FileLocator.resolve(fileURL);
		return ImageDescriptor.createFromURL(resolve);
	}

	public static MessageConsole findConsole(String name) {
		ConsolePlugin consolePlugin = ConsolePlugin.getDefault();
		IConsoleManager conMan = consolePlugin.getConsoleManager();
		IConsole[] existing = conMan.getConsoles();
		for (int i = 0; i < existing.length; i++) {
			if (name.equals(existing[i].getName()))
				return (MessageConsole) existing[i];
		}
		// no console found, so create a new one
		MessageConsole messageConsole = new MessageConsole(name, null);
		conMan.addConsoles(new IConsole[] { messageConsole });
		return messageConsole;
	}

	public static void removeUnNecessaryListener() {
		for (int i = 0 ; i < depEveList.size(); i++) {
			removeDeploymentEventListener(depEveList.get(i));
		}
		depEveList.clear();
	}

	public void addDeploymentEventListener(DeploymentEventListener listener) {
		DEPLOYMENT_EVENT_LISTENERS.add(DeploymentEventListener.class, listener);
	}

	public static void removeDeploymentEventListener(DeploymentEventListener listener) {
		DEPLOYMENT_EVENT_LISTENERS.remove(DeploymentEventListener.class, listener);
	}
	
	public void addUploadProgressEventListener(UploadProgressEventListener listener) {
		UPLOAD_PROGRESS_EVENT_LISTENERS.add(UploadProgressEventListener.class, listener);
	}
	
	public void removeUploadProgressEventListener(UploadProgressEventListener listener) {
		UPLOAD_PROGRESS_EVENT_LISTENERS.remove(UploadProgressEventListener.class, listener);		
	}

	public void fireDeploymentEvent(DeploymentEventArgs args) {
		Object[] list = DEPLOYMENT_EVENT_LISTENERS.getListenerList();

		for (int i = 0; i < list.length; i += 2) {
			if (list[i] == DeploymentEventListener.class) {
				((DeploymentEventListener) list[i + 1]).onDeploymentStep(args);
			}
		}
	}

	public void fireUploadProgressEvent(UploadProgressEventArgs args) {
		Object[] list = UPLOAD_PROGRESS_EVENT_LISTENERS.getListenerList();

		for (int i = 0; i < list.length; i += 2) {
			if (list[i] == UploadProgressEventListener.class) {
				((UploadProgressEventListener) list[i + 1]).onUploadProgress(args);
			}
		}
	}

	/**
	 * Variable to track, if came to remote access page from
	 * Publish wizard's Encryption link.
	 * @param value
	 */
	public void setIsFromEncLink(boolean value) {
		isFrmEncLink = value;
	}

	public boolean getIsFromEncLink() {
		return isFrmEncLink;
	}

	/**
	 * Method sets password value entered on publish wizard.
	 * @param pwd
	 */
	public void setPubPwd(String pwd) {
		pubPwd = pwd;
	}

	public String getPubPwd() {
		return pubPwd;
	}

	/**
	 * Method sets confirm password value entered on publish wizard.
	 * @param cnfPwd
	 */
	public void setPubCnfPwd(String cnfPwd) {
		pubCnfPwd = cnfPwd;
	}

	public String getPubCnfPwd() {
		return pubCnfPwd;
	}

	/**
	 * Method sets user name entered on publish wizard.
	 * @param uname
	 */
	public void setPubUname(String uname) {
		pubUname = uname;
	}

	public String getPubUname() {
		return pubUname;
	}
}
