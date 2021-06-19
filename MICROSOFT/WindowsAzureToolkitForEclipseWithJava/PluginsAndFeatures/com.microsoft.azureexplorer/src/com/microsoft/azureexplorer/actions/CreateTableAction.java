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
package com.microsoft.azureexplorer.actions;

import com.microsoft.azureexplorer.forms.CreateTableForm;
import com.microsoftopentechnologies.tooling.msservices.helpers.Name;
import com.microsoftopentechnologies.tooling.msservices.serviceexplorer.NodeActionEvent;
import com.microsoftopentechnologies.tooling.msservices.serviceexplorer.NodeActionListener;
import com.microsoftopentechnologies.tooling.msservices.serviceexplorer.azure.storage.ClientStorageNode;
import com.microsoftopentechnologies.tooling.msservices.serviceexplorer.azure.storage.TableModule;
import org.eclipse.swt.widgets.Shell;

@Name("Create new table")
public class CreateTableAction extends NodeActionListener {
    private TableModule tableModule;

    public CreateTableAction(TableModule tableModule) {
        this.tableModule = tableModule;
    }

    @Override
    public void actionPerformed(NodeActionEvent e) {
        CreateTableForm form = new CreateTableForm(new Shell(), tableModule.getStorageAccount());

        form.setOnCreate(new Runnable() {
            @Override
            public void run() {
                tableModule.getParent().removeAllChildNodes();
                ((ClientStorageNode) tableModule.getParent()).load();
            }
        });
        form.open();
    }
}
