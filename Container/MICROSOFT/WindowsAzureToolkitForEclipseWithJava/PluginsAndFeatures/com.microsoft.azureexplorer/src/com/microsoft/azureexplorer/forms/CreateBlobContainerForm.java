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
package com.microsoft.azureexplorer.forms;

import com.microsoft.azureexplorer.Activator;
import com.microsoftopentechnologies.tooling.msservices.components.DefaultLoader;
import com.microsoftopentechnologies.tooling.msservices.helpers.azure.AzureCmdException;
import com.microsoftopentechnologies.tooling.msservices.helpers.azure.sdk.StorageClientSDKManagerImpl;
import com.microsoftopentechnologies.tooling.msservices.model.storage.BlobContainer;
import com.microsoftopentechnologies.tooling.msservices.model.storage.ClientStorageAccount;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.*;
import org.eclipse.ui.PlatformUI;

import java.net.URL;
import java.util.Calendar;

public class CreateBlobContainerForm extends Dialog {
    private static String NAMING_GUIDELINES_LINK = "<a href=\"http://go.microsoft.com/fwlink/?LinkId=255555\">Naming Guidelines</a>";

    private Label nameLabel;
    private Text nameTextField;
    private Link namingGuidelinesLink;
    private Button buttonOK;

    private ClientStorageAccount storageAccount;
    private Runnable onCreate;

    private static final String NAME_REGEX = "^[a-z0-9](?!.*--)[a-z0-9-]+[a-z0-9]$";
    private static final int NAME_MAX = 63;
    private static final int NAME_MIN = 3;

    public CreateBlobContainerForm(Shell parentShell, ClientStorageAccount storageAccount) {
        super(parentShell);
        this.storageAccount = storageAccount;
    }

    @Override
    protected void configureShell(Shell newShell) {
        super.configureShell(newShell);
        newShell.setText("Create blob container");
    }

    @Override
    protected Control createContents(Composite parent) {
        Composite container = new Composite(parent, SWT.NONE);
        GridLayout gridLayout = new GridLayout();
        container.setLayout(gridLayout);
        GridData gridData = new GridData();
        gridData.widthHint = 350;
        container.setLayoutData(gridData);

        nameLabel = new Label(container, SWT.LEFT);
        nameLabel.setText("Enter a name for the new blob container");
        nameTextField = new Text(container, SWT.LEFT | SWT.BORDER);
        gridData = new GridData(SWT.FILL, SWT.CENTER, true, true);
        nameTextField.setLayoutData(gridData);
        namingGuidelinesLink = new Link(container, SWT.LEFT);
        namingGuidelinesLink.setText(NAMING_GUIDELINES_LINK);
        namingGuidelinesLink.setLayoutData(gridData);
        namingGuidelinesLink.addSelectionListener(new SelectionAdapter() {
            @Override
            public void widgetSelected(SelectionEvent event) {
                try {
                    PlatformUI.getWorkbench().getBrowserSupport().getExternalBrowser().openURL(new URL(event.text));
                } catch (Exception ex) {
					/*
					 * only logging the error in log file
					 * not showing anything to end user
					 */
                    Activator.getDefault().log("Error occurred while opening link in default browser.", ex);
                }
            }
        });

        nameTextField.addModifyListener(new ModifyListener() {
            @Override
            public void modifyText(ModifyEvent modifyEvent) {
                changedName();
            }
        });
//        contentPane.registerKeyboardAction(new ActionListener() {
//            public void actionPerformed(ActionEvent e) {
//                onCancel();
//            }
//        }, KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE, 0), JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT);
        return super.createContents(parent);
    }

    @Override
    protected Control createButtonBar(Composite parent) {
        Control ctrl = super.createButtonBar(parent);
        buttonOK = getButton(IDialogConstants.OK_ID);
        buttonOK.setEnabled(false);
        return ctrl;
    }

    private void changedName() {
        buttonOK.setEnabled(nameTextField.getText().length() > 0);
    }

    @Override
    protected void okPressed() {
        final String name = nameTextField.getText();

        if (name.length() < NAME_MIN || name.length() > NAME_MAX || !name.matches(NAME_REGEX)) {
            DefaultLoader.getUIHelper().showError("Container names must start with a letter or number, and can contain only letters, numbers, and the dash (-) character.\n" +
                    "Every dash (-) character must be immediately preceded and followed by a letter or number; consecutive dashes are not permitted in container names.\n" +
                    "All letters in a container name must be lowercase.\n" +
                    "Container names must be from 3 through 63 characters long.", "Azure Explorer");
            return;
        }

        DefaultLoader.getIdeHelper().runInBackground(null, "Creating blob container...", false, true, "Creating blob container...",
                new Runnable() {
                    @Override
                    public void run() {
                        try {
                            for (BlobContainer blobContainer : StorageClientSDKManagerImpl.getManager().getBlobContainers(storageAccount)) {
                                if (blobContainer.getName().equals(name)) {
                                    DefaultLoader.getIdeHelper().invokeLater(new Runnable() {
                                        @Override
                                        public void run() {
                                            DefaultLoader.getUIHelper().showError("A blob container with the specified name already exists.", "Azure Explorer");
                                        }
                                    });

                                    return;
                                }
                            }

                            BlobContainer blobContainer = new BlobContainer(name, storageAccount.getBlobsUri() + name, "", Calendar.getInstance(), "");
                            StorageClientSDKManagerImpl.getManager().createBlobContainer(storageAccount, blobContainer);

                            if (onCreate != null) {
                                DefaultLoader.getIdeHelper().invokeLater(onCreate);
                            }
                        } catch (AzureCmdException e) {
                            DefaultLoader.getUIHelper().showException("Error creating blob container", e, "Error creating blob container", false, true);
                        }
                    }
                });
        super.okPressed();
    }

    public void setOnCreate(Runnable onCreate) {
        this.onCreate = onCreate;
    }
}
