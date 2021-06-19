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
package com.persistent.winazureroles;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.debug.core.DebugPlugin;
import org.eclipse.debug.core.ILaunchConfigurationType;
import org.eclipse.debug.core.ILaunchConfigurationWorkingCopy;
import org.eclipse.debug.core.ILaunchManager;
import org.eclipse.jdt.launching.IJavaLaunchConfigurationConstants;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.SelectionListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.dialogs.PropertyPage;

import com.interopbridges.tools.windowsazure.WindowsAzureEndpoint;
import com.interopbridges.tools.windowsazure.WindowsAzureEndpointType;
import com.interopbridges.tools.windowsazure.WindowsAzureInvalidProjectOperationException;
import com.interopbridges.tools.windowsazure.WindowsAzureProjectManager;
import com.interopbridges.tools.windowsazure.WindowsAzureRole;
import com.microsoftopentechnologies.azurecommons.model.RoleAndEndpoint;
import com.microsoftopentechnologies.azurecommons.roleoperations.WARDebuggingUtilMethods;
import com.microsoftopentechnologies.wacommon.utils.PluginUtil;
import com.persistent.util.WAEclipseHelper;

import waeclipseplugin.Activator;

/**
 * Property page for debugging.
 */
public class WARDebugging extends PropertyPage {

    private WindowsAzureProjectManager waProjManager;
    private WindowsAzureRole windowsAzureRole;
    private Button debugCheck;
    private Button jvmCheck;
    private Button createDebug;
    private Combo comboEndPoint;
    private Label lblDebugEndPoint;
    private boolean isDebugChecked;
    private WindowsAzureEndpoint dbgSelEndpoint;
    private Map<String,String> debugMap = new HashMap<String, String>();
    private int childOk;
    private boolean isPageDisplayed = false;

    @Override
    public String getTitle() {
    	if (!isPageDisplayed) {
    		return super.getTitle();
    	}
        try {
            if (windowsAzureRole != null) {
                WindowsAzureEndpoint endPt =
                windowsAzureRole.getDebuggingEndpoint();
                if (endPt == null) {
                    debugCheck.setSelection(false);
                    comboEndPoint.removeAll();
                    makeAllDisable();
                } else {
                    populateEndPointList();
                    comboEndPoint.setText(String.format(Messages.dbgEndPtStr,
                            endPt.getName(),
                            endPt.getPort(),
                            endPt.getPrivatePort()));
                }
            }
        } catch (Exception e) {
            PluginUtil.displayErrorDialogAndLog(
            		getShell(),
            		Messages.adRolErrTitle,
            		Messages.dlgDbgErr,
            		e);
        }
        return super.getTitle();
    }

    /**
     * Create checkbox to enable/disable debugging,
     * combo box containing the input endpoints. And a button
     * to launch a dialog to create debug configurations.
     *
     * @param parent : parent composite.
     * @return control
     */
    @Override
    protected Control createContents(Composite parent) {
        noDefaultAndApplyButton();
        PlatformUI.getWorkbench().getHelpSystem().setHelp(parent,
                "com.persistent.winazure.eclipseplugin."
                + "windows_azure_debug_page");
        waProjManager = Activator.getDefault().getWaProjMgr();
        windowsAzureRole = Activator.getDefault().getWaRole();
        Activator.getDefault().setSaved(false);

        Composite container = new Composite(parent, SWT.NONE);
        GridLayout gridLayout = new GridLayout();
        gridLayout.numColumns = 2;
        GridData gridData = new GridData();
        gridData.horizontalAlignment = SWT.FILL;
        gridData.grabExcessHorizontalSpace = true;
        container.setLayout(gridLayout);
        container.setLayoutData(gridData);

        //Debug check box which enables debugging.
        createDebugCheckButton(container);

        lblDebugEndPoint = new Label(container, SWT.LEFT);
        gridData = new GridData();
        gridData.verticalIndent = 4;
        gridData.horizontalIndent = 20;
        lblDebugEndPoint.setText(Messages.dlgDbgEndPtTxt);
        lblDebugEndPoint.setLayoutData(gridData);

        //Endpoints list on which debugging can be done
        createComboEndpoint(container);
        //suspend the jvm or not defined by this check box's status
        createJVMCheckButton(container);
        //Button to create a new debug configuration.
        createDebugButton(container);

        try {
            if (isDebugChecked) {
                WindowsAzureEndpoint endPt =
                windowsAzureRole.getDebuggingEndpoint();
                comboEndPoint.setText(String.format(Messages.dbgEndPtStr,
                        endPt.getName(),
                        endPt.getPort(),
                        endPt.getPrivatePort()));
            } else {
                makeAllDisable();
            }
        } catch (WindowsAzureInvalidProjectOperationException e1) {
        	PluginUtil.displayErrorDialogAndLog(
        			getShell(),
        			Messages.adRolErrTitle,
        			Messages.dlgDbgErr, e1);
        }

        if (debugCheck.getSelection()
                && comboEndPoint.getText().equals("")) {
            setValid(false);
        }
        isPageDisplayed = true;
        return container;
    }

    /**
     * Creates the JVM check button and adds selection listener to it.
     * The check box determines whether the JVM should start in
     * suspended mode or not.
     *
     * @param container
     */
    private void createJVMCheckButton(Composite container) {
        jvmCheck = new Button(container, SWT.CHECK);
        GridData gridData = new GridData();
        gridData.verticalIndent = 4;
        gridData.horizontalIndent = 20;
        gridData.horizontalSpan = 2;
        jvmCheck.setText(Messages.dlgDbgJVMCkBxTxt);
        jvmCheck.setLayoutData(gridData);
        try {
            if (isDebugChecked) {
                jvmCheck.setSelection(windowsAzureRole.getStartSuspended());
            } else {
                jvmCheck.setSelection(false);
            }

        } catch (WindowsAzureInvalidProjectOperationException e2) {
             PluginUtil.displayErrorDialogAndLog(
            		 getShell(),
            		 Messages.adRolErrTitle,
            		 Messages.dlgDbgErr, e2);
        }
        jvmCheck.addSelectionListener(new SelectionListener() {

            @Override
            public void widgetSelected(SelectionEvent arg0) {
                try {
                    if (jvmCheck.getSelection()) {
                        windowsAzureRole.setStartSuspended(true);
                    } else {
                        windowsAzureRole.setStartSuspended(false);
                    }
             } catch (WindowsAzureInvalidProjectOperationException e) {
            	 PluginUtil.displayErrorDialogAndLog(
            			 getShell(),
            			 Messages.adRolErrTitle,
            			 Messages.dlgDbgErr, e);
                }
            }

            @Override
            public void widgetDefaultSelected(SelectionEvent arg0) {
            }
        });
    }

    /**
     * Creates the debug check button and adds selection listener to it.
     * This check box enables/disables the debugging.
     *
     * @param container
     */
    private void createDebugCheckButton(Composite container) {
        debugCheck = new Button(container, SWT.CHECK);
        GridData gridData = new GridData();
        gridData.verticalIndent = 5;
        gridData.horizontalIndent = 5;
        gridData.grabExcessHorizontalSpace = true;
        gridData.horizontalSpan = 2;
        debugCheck.setText(Messages.dlgDbgChkBoxTxt);
        debugCheck.setLayoutData(gridData);
        try {
            if (windowsAzureRole.getDebuggingEndpoint() == null) {
                isDebugChecked = false;
            } else {
                isDebugChecked = true;
            }
        } catch (Exception ex) {
            //As getTitle() is also showing the error message if any exception
            //occurs in role.getDebuggingEndpoint(), so only logging
            //the exception. getTitle() gets called every time this page is
            //selected but createContents() is called only once while creating
            //the page.
            Activator.getDefault().log(Messages.dlgDbgErr, ex);
        }
        debugCheck.setSelection(isDebugChecked);
        debugCheck.addSelectionListener(new SelectionListener() {
            @Override
            public void widgetSelected(SelectionEvent event) {
                debugOptionStatus();
            }

            @Override
            public void widgetDefaultSelected(SelectionEvent event) {
            }
        });
    }

    /**
     * Creates the combo for the endpoints to be selected for debugging.
     *
     * @param container
     */
    private void createComboEndpoint(Composite container) {
        comboEndPoint = new Combo(container, SWT.READ_ONLY);
        GridData gridData = new GridData();
        gridData.widthHint = 260;
        gridData.horizontalAlignment = GridData.END;
        comboEndPoint.setLayoutData(gridData);
        try {
        	populateEndPointList();
        } catch (WindowsAzureInvalidProjectOperationException e1) {
        	PluginUtil.displayErrorDialogAndLog(
        			getShell(),
        			Messages.adRolErrTitle,
        			Messages.dlgDbgErr, e1);
        }
        comboEndPoint.addSelectionListener(new SelectionListener() {

            @Override
            public void widgetSelected(SelectionEvent arg0) {
                setValid(true);
                try {
                    if (debugCheck.getSelection()) {
                        dbgSelEndpoint = getDebugSelectedEndpoint();
                        windowsAzureRole.setDebuggingEndpoint(dbgSelEndpoint);
                        windowsAzureRole.
                        setStartSuspended(jvmCheck.getSelection());
                    }
                } catch (WindowsAzureInvalidProjectOperationException e) {
                	PluginUtil.displayErrorDialogAndLog(
                			getShell(),
                			Messages.adRolErrTitle,
                			Messages.adRolErrMsgBox1
                			+ Messages.adRolErrMsgBox2, e);
                }
            }

            @Override
            public void widgetDefaultSelected(SelectionEvent arg0) {
            }
        });
    }

    /**
     * Creates a button which launches a dialog to create debug configurations.
     *
     * @param container
     */
    private void createDebugButton(Composite container) {
        createDebug = new Button(container, SWT.PUSH | SWT.CENTER);
        GridData gridData = new GridData();
        gridData.verticalIndent = 4;
        gridData.horizontalIndent = 20;
        gridData.horizontalSpan = 2;
        gridData.grabExcessHorizontalSpace = true;
        createDebug.setText(Messages.dlgDbgCrtBtn);
        createDebug.setLayoutData(gridData);
        final Composite cont = new Composite(container, SWT.NONE);
        createDebug.addSelectionListener(new SelectionListener() {
            @Override
            public void widgetSelected(SelectionEvent event) {
                DebugConfigurationDialog dialog =
                        new DebugConfigurationDialog(cont.getShell() ,
             windowsAzureRole , getDebugSelectedEndpoint(), debugMap);
             childOk = dialog.open();
            }

            @Override
            public void widgetDefaultSelected(SelectionEvent event) {
            }
        });
    }

    /**
     * This method disables all the control on UI
     * if Debug is disabled.
     */
    private void makeAllDisable() {
        createDebug.setEnabled(false);
        comboEndPoint.setEnabled(false);
        jvmCheck.setEnabled(false);
        lblDebugEndPoint.setEnabled(false);
    }

    /**
     * This method enables all the control on UI
     * if Debug is enabled.
     */
    private void makeDebugEnable() {
        try {
            createDebug.setEnabled(true);
            comboEndPoint.setEnabled(true);
            jvmCheck.setEnabled(true);
            lblDebugEndPoint.setEnabled(true);

            RoleAndEndpoint obj = WARDebuggingUtilMethods.
            		getDebuggingEndpoint(windowsAzureRole, waProjManager);
            windowsAzureRole = obj.getRole();
            WindowsAzureEndpoint endpt = obj.getEndPt();

            populateEndPointList();
            comboEndPoint.setText(String.format(Messages.dbgEndPtStr,
                    endpt.getName(),
                    endpt.getPort(),
                    endpt.getPrivatePort()));

            dbgSelEndpoint = endpt;
        } catch (WindowsAzureInvalidProjectOperationException e) {
        	PluginUtil.displayErrorDialogAndLog(
        			getShell(),
        			Messages.adRolErrTitle,
        			Messages.dlgDbgErr, e);
        }
    }

    /**
     * This method returns the selected endpoint name
     * which was selected for debugging.
     * @return selectedEndpoint
     */
    private WindowsAzureEndpoint getDebugSelectedEndpoint() {
    	WindowsAzureEndpoint selectedEndpoint = null;
    	try {
    		selectedEndpoint = WARDebuggingUtilMethods.
    				getDebugSelectedEndpoint(windowsAzureRole, comboEndPoint.getText());
    	} catch (WindowsAzureInvalidProjectOperationException e) {
    		PluginUtil.displayErrorDialogAndLog(
    				getShell(),
    				Messages.adRolErrTitle,
    				Messages.dlgDbgErr, e);
    	}
    	return selectedEndpoint;
    }

    /**
     * This method sets the status of debug option
     * based on the user input.If user checks the debug check box
     * first time then it will add a debugging end point otherwise it will
     * prompt the user for removal of associated end point for debugging if
     * user already has some debug end point associated and unchecked
     * the debug check box.
     */
    private void debugOptionStatus() {
        if (debugCheck.getSelection()) {
            makeDebugEnable();
            try {
                windowsAzureRole.setDebuggingEndpoint(dbgSelEndpoint);
                windowsAzureRole.setStartSuspended(jvmCheck.getSelection());
            } catch (WindowsAzureInvalidProjectOperationException e1) {
            	PluginUtil.displayErrorDialogAndLog(
            			getShell(),
            			Messages.adRolErrTitle,
            			Messages.dlgDbgErr, e1);
            }
        } else {
            setValid(true);
            if (isDebugChecked && !comboEndPoint.getText().equals("")) {
                String msg = String.format("%s%s", Messages.dlgDbgEdPtAscMsg,
                                comboEndPoint.getText());
                boolean choice = MessageDialog.openQuestion(getShell(),
                        Messages.dlgDbgEndPtErrTtl, msg);
                if (choice) {
                     removeDebugAssociatedEndpoint();
                } else {
                    makeAllDisable();
                    try {
                        windowsAzureRole.setDebuggingEndpoint(null);
                    } catch (WindowsAzureInvalidProjectOperationException e) {
                    	PluginUtil.displayErrorDialogAndLog(
                    			getShell(),
                    			Messages.adRolErrTitle,
                    			Messages.dlgDbgErr, e);
                    }
                }
            } else {
                removeDebugAssociatedEndpoint();
            }
        }
    }

    /**
     * This method removed the associated debug end point
     * if debug check box get unchecked.
     */
    private void removeDebugAssociatedEndpoint() {
        List<WindowsAzureEndpoint> endpointsList;
        try {
            endpointsList = new ArrayList<WindowsAzureEndpoint>(
                    windowsAzureRole.getEndpoints());
            for (WindowsAzureEndpoint endpoint : endpointsList) {
                if (comboEndPoint.getText().equalsIgnoreCase(
                        String.format(Messages.dbgEndPtStr,
                                endpoint.getName(),
                                endpoint.getPort(),
                                endpoint.getPrivatePort()))) {
                    endpoint.delete();
                }
            }
            comboEndPoint.removeAll();
            comboEndPoint.setText("");
            makeAllDisable();
            windowsAzureRole.setDebuggingEndpoint(null);
        } catch (WindowsAzureInvalidProjectOperationException e) {
        	PluginUtil.displayErrorDialogAndLog(
        			getShell(),
        			Messages.adRolErrTitle,
        			Messages.dlgDbgErr, e);
        }
    }

    /**
     * This method creates a new debug configuration under
     * Remote Java Application with configuration name.
     * @param configName :- configuration name
     * @param projName :- project to debug
     * @param hostName :- host where debug should happen
     * @param port :- debugging port number
     */
    protected void createLaunchConfig(String configName,
    		String projName,
            String hostName, String port) {
        try {
            ILaunchManager manager =
            		DebugPlugin.getDefault().getLaunchManager();
            ILaunchConfigurationType type =
                manager.getLaunchConfigurationType(
                IJavaLaunchConfigurationConstants.ID_REMOTE_JAVA_APPLICATION);
            ILaunchConfigurationWorkingCopy workingCopy = type.newInstance(
                    null, configName);
            workingCopy.setAttribute(
                IJavaLaunchConfigurationConstants.ATTR_PROJECT_NAME, projName);
            Map<String, String> connectMap = new HashMap<String, String>();
            connectMap.put("hostname", hostName);
            connectMap.put("port", port);
            workingCopy.setAttribute(
                IJavaLaunchConfigurationConstants.ATTR_CONNECT_MAP, connectMap);
            workingCopy.doSave();
        } catch (Exception e) {
        	PluginUtil.displayErrorDialogAndLog(
        			this.getShell(),
        			Messages.dlgDbgConfErrTtl,
        			Messages.dlgDbgConfErr, e);
        }
    }


    /**
     * This method populates the endpoint list
     * every time we made any changes in the endpoint list.
     * @throws WindowsAzureInvalidProjectOperationException
     */
    private void populateEndPointList()
    		throws WindowsAzureInvalidProjectOperationException {
        List<WindowsAzureEndpoint> endpointsList;
        endpointsList = new ArrayList<WindowsAzureEndpoint>(
                windowsAzureRole.getEndpoints());
        comboEndPoint.removeAll();
        for (WindowsAzureEndpoint endpoint : endpointsList) {
            if (((endpoint.getEndPointType().
                    equals(WindowsAzureEndpointType.Input)
                    && endpoint.getPrivatePort() != null)
                    || endpoint.getEndPointType().equals(
                    		WindowsAzureEndpointType.InstanceInput))
                    && !endpoint.equals(windowsAzureRole.
                    		getSessionAffinityInputEndpoint())
                    && !endpoint.equals(windowsAzureRole.
                    		getSslOffloadingInputEndpoint())) {
                  comboEndPoint.add(String.format(Messages.dbgEndPtStr,
                          endpoint.getName(),
                          endpoint.getPort(),
                          endpoint.getPrivatePort()));
            }
        }
    }

    @Override
    public boolean performOk() {
    	if (!isPageDisplayed) {
    		return super.performOk();
    	}
        //check for child window's OK button was pressed or not
        //if not then we do not need to create a debug configuration otherwise
        //we do need to create debug configuration based on the user
        //selected options.
        if (childOk == Window.OK) {
            String emuCheck = debugMap.get(Messages.dlgDbgEmuChkd);
            String cloudCheck = debugMap.get(Messages.dlgDbgCldChkd);
            if (emuCheck != null && emuCheck.equals("true")) {
                createLaunchConfig(
                debugMap.get(Messages.dlgDbgEmuConf),
                debugMap.get(Messages.dlgDbgEmuProj),
                debugMap.get(Messages.dlgDbgEmuHost),
                debugMap.get(Messages.dlgDbgEmuPort));
            }
            if (cloudCheck != null && cloudCheck.equals("true")) {
                createLaunchConfig(
                debugMap.get(Messages.dlgDbgCldConf),
                debugMap.get(Messages.dlgDbgCldProj),
                debugMap.get(Messages.dlgDbgCldHost),
                debugMap.get(Messages.dlgDbgCldPort));
            }
        }
        boolean okToProceed = true;
        try {
            if (!Activator.getDefault().isSaved()) {
                waProjManager.save();
                Activator.getDefault().setSaved(true);
            }
            WAEclipseHelper.refreshWorkspace(
            		Messages.rolsRefTitle, Messages.rolsRefMsg);
        } catch (WindowsAzureInvalidProjectOperationException e) {
        	PluginUtil.displayErrorDialogAndLog(
        			this.getShell(),
        			Messages.adRolErrTitle,
        			Messages.adRolErrMsgBox1
        			+ Messages.adRolErrMsgBox2, e);
            okToProceed = false;
        }
        if (okToProceed) {
            okToProceed = super.performOk();
        }
        return okToProceed;
    }

}
