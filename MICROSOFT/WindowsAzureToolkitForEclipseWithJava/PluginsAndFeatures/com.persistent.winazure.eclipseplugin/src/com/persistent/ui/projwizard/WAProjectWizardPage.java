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
package com.persistent.ui.projwizard;

import java.io.IOException;

import org.eclipse.core.resources.IWorkspace;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.SelectionListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.DirectoryDialog;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.ISelectionService;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.dialogs.WorkingSetGroup;

import waeclipseplugin.Activator;

/**
 * This class creates a page for the project wizard.
 */
public class WAProjectWizardPage extends WizardPage {

    private Text  textProjName;
    private Button buttonUseDefLoc;
    private Label  lblLocation;
    private Text   textLocation;
    private Button buttonBrowse;
    private WorkingSetGroup workingSetGroup;

    /**
     * Constructor with pagename.
     *
     *@param pageName : name of page
     */
    protected WAProjectWizardPage(String pageName) {
        super(pageName);
        setTitle(Messages.wizPageTitle);
        setDescription(Messages.wizPageDesc);
        setPageComplete(false);
    }

    /**
     * To draw controls on page.
     *
     * @param parent
     */
    @Override
    public void createControl(Composite parent) {
        final IWorkspace workspace = ResourcesPlugin.getWorkspace();
        final IWorkspaceRoot root = workspace.getRoot();

        //display help contents
        PlatformUI.getWorkbench().getHelpSystem().setHelp(parent.getShell(),
                "com.persistent.winazure.eclipseplugin." +
                "windows_azure_project");

        GridLayout gridLayout = new GridLayout();
        GridData gridData = new GridData();

        gridData.grabExcessHorizontalSpace = true;
        Composite container = new Composite(parent, SWT.NONE);

        container.setLayout(gridLayout);
        container.setLayoutData(gridData);

        //Composite for Project name label & text box
        createProjNameComposite(container);

        buttonUseDefLoc = new Button(container, SWT.CHECK);
        buttonUseDefLoc.setText(Messages.wizPageDefaultLoc);
        buttonUseDefLoc.setSelection(true);
        buttonUseDefLoc.addSelectionListener(new SelectionListener() {

            @Override
            public void widgetSelected(SelectionEvent arg0) {
                Button button = (Button) arg0.getSource();
                if (button.getSelection()) {
                    lblLocation.setEnabled(false);
                    textLocation.setText(root.getLocation().toPortableString());
                    textLocation.setEnabled(false);
                    buttonBrowse.setEnabled(false);
                    setErrorMessage(null);
                    setPageComplete(true);
                } else {
                    lblLocation.setEnabled(true);
                    textLocation.setEnabled(true);
                    textLocation.setText(""); //$NON-NLS-1$
                    buttonBrowse.setEnabled(true);
                    setDescription(Messages.wizPageEnterLoc);
                    setPageComplete(false);
                }
            }

            @Override
            public void widgetDefaultSelected(SelectionEvent arg0) {

            }
        });
        gridData = new GridData();
        gridData.horizontalIndent = 5;
        buttonUseDefLoc.setLayoutData(gridData);

        //Composite for location of project
        createProjLocComposite(container);

        IWorkbench workbench = PlatformUI.getWorkbench();
        IWorkbenchWindow window = workbench.getActiveWorkbenchWindow();
        ISelectionService service = window.getSelectionService();
        ISelection selection = service.getSelection();

        IStructuredSelection structuredSel;
        if (selection instanceof IStructuredSelection) {
            structuredSel = (IStructuredSelection) selection;
        } else {
            structuredSel = new StructuredSelection();
        }

        workingSetGroup = new WorkingSetGroup(container, structuredSel,
        		new String []{Messages.rsrcPage,
        		Messages.javaPage});
        setControl(container);
    }

    /**
     * Creates composite for project name.
     *
     * @param container
     */
    private void createProjNameComposite(Composite container) {
        Composite containerProjName = new Composite(container, SWT.NONE);
        GridLayout gridLayout = new GridLayout();
        gridLayout.numColumns = 2;
        GridData gridData = new GridData();
        gridData.horizontalAlignment = SWT.FILL;
        gridData.grabExcessHorizontalSpace = true;
        containerProjName.setLayout(gridLayout);
        containerProjName.setLayoutData(gridData);

        Label lblProjName = new Label(containerProjName, SWT.LEFT);
        lblProjName.setText(Messages.wizPageProjName);

        textProjName = new Text(containerProjName, SWT.SINGLE | SWT.BORDER);
        gridData = new GridData();
        gridData.widthHint = 330;
        gridData.horizontalAlignment = SWT.FILL;
        gridData.grabExcessHorizontalSpace = true;
        textProjName.setLayoutData(gridData);
        textProjName.addModifyListener(new ModifyListener() {

            @Override
            public void modifyText(ModifyEvent event) {
                handleModifyText(event);
            }
        });
    }

    /**
     * Creates composite for project location.
     *
     * @param container
     */
    private void createProjLocComposite(Composite container) {
        final IWorkspace workspace = ResourcesPlugin.getWorkspace();
        IWorkspaceRoot root = workspace.getRoot();

        Composite containerDefLoc = new Composite(container, SWT.NONE);
        GridLayout gridLayout = new GridLayout();
        gridLayout.numColumns = 3;
        GridData gridData = new GridData();
        gridData.horizontalAlignment = SWT.FILL;
        gridData.grabExcessHorizontalSpace = true;
        containerDefLoc.setLayout(gridLayout);
        containerDefLoc.setLayoutData(gridData);

        lblLocation = new Label(containerDefLoc, SWT.LEFT);
        lblLocation.setText(Messages.wizPageLocation);
        lblLocation.setEnabled(false);


        textLocation = new Text(containerDefLoc, SWT.SINGLE | SWT.BORDER);
        textLocation.setText(root.getLocation().toPortableString());
        textLocation.setEnabled(false);
        gridData = new GridData();
        gridData.widthHint = 270;
        gridData.horizontalAlignment = SWT.FILL;
        gridData.grabExcessHorizontalSpace = true;
        textLocation.setLayoutData(gridData);
        textLocation.addModifyListener(new ModifyListener() {

            @Override
            public void modifyText(ModifyEvent event) {
                String projLocation = ((Text) event.widget).getText();
                Path path = new Path(projLocation);
                IStatus status = workspace.validateProjectLocation(null, path);

                if (projLocation.length() == 0) {
                    setDescription(Messages.wizPageEnterLoc);
                    setPageComplete(false);
                } else if (status.isOK()) {
                    setErrorMessage(null);
                    setPageComplete(true);
                } else {
                    setErrorMessage(status.getMessage());
                    setPageComplete(false);
                }
            }
        });

        buttonBrowse = new Button(containerDefLoc, SWT.PUSH);
        buttonBrowse.setText(Messages.wizPageBrowse);
        buttonBrowse.setEnabled(false);
        buttonBrowse.addSelectionListener(new SelectionListener() {

            @Override
            public void widgetSelected(SelectionEvent arg0) {
                browseBtnListener();
            }

            @Override
            public void widgetDefaultSelected(SelectionEvent arg0) {

            }
        });
        gridData = new GridData();
        gridData.widthHint = 80;
        buttonBrowse.setLayoutData(gridData);
    }


    /**
     * Handles modify event of project name text box.
     *
     * @param event
     */
    protected void handleModifyText(ModifyEvent event) {
        IWorkspace workspace = ResourcesPlugin.getWorkspace();
        IWorkspaceRoot root = workspace.getRoot();
        final int resourceProj = 4;
        String projName = ((Text) event.widget).getText();
        IStatus projNameStatus = workspace.validateName(projName, resourceProj);
        IPath projLocation = root.getLocation().append(projName);

        if (projName.isEmpty()) {
            setDescription(Messages.wizPageDesc);
            setPageComplete(false);
        } else if (!projNameStatus.isOK()) {
            setErrorMessage(projNameStatus.getMessage());
            setPageComplete(false);
        } else if (root.getProject(projName).exists()) {
            setErrorMessage(Messages.wizPageErrMsg1);
            setPageComplete(false);
        } else if (projLocation.toFile().exists()) {
            try {
                String path = projLocation.toFile().getCanonicalPath();
                projLocation = new Path(path);
            } catch (IOException e) {
                Activator.getDefault().log(Messages.wizPageErrPath, e);
                setErrorMessage(Messages.wizPageErrPath);
                setPageComplete(false);
            }
            String nameInWorkspace = projLocation.lastSegment();
            if (nameInWorkspace.equalsIgnoreCase(projName)) {
                String msg = String.format(
                		Messages.wizPageNameMustBe, nameInWorkspace);
                setErrorMessage(msg);
                setPageComplete(false);
            }
        } else {
            setErrorMessage(null);
            setDescription(Messages.wizPageDesc);
            setPageComplete(true);
        }
    }

    /**
     * Listener for Browse Button.
     */
    protected void browseBtnListener() {
        DirectoryDialog dialog = new DirectoryDialog(this.getShell());
        dialog.setText(Messages.wizPageSelFolder);
        dialog.setMessage(Messages.wizPageChooseDir);
        String directory = dialog.open();
        if (directory != null) {
        textLocation.setText(directory);
        }
    }

    /**
     * Method returns project name.
     * @return String
     */
    public String getTextProjName() {
        return textProjName.getText();
    }

    /**
     * Method returns project location.
     * @return String
     */
    public String getTextLocation() {
        return textLocation.getText();
    }

    /**
     * Method returns project should be
     * created at default location or not.
     * @return boolean
     */
    public boolean isDefaultLocation() {
        return buttonUseDefLoc.getSelection();
    }

    /**
     * Method returns working set group.
     * @return
     */
    public WorkingSetGroup getWorkingSetGroup() {
        return workingSetGroup;
    }
}
