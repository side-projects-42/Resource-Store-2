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

import com.microsoft.azureexplorer.forms.CreateQueueForm;
import com.microsoftopentechnologies.tooling.msservices.helpers.Name;
import com.microsoftopentechnologies.tooling.msservices.serviceexplorer.NodeActionEvent;
import com.microsoftopentechnologies.tooling.msservices.serviceexplorer.NodeActionListener;
import com.microsoftopentechnologies.tooling.msservices.serviceexplorer.azure.storage.ClientStorageNode;
import com.microsoftopentechnologies.tooling.msservices.serviceexplorer.azure.storage.QueueModule;
import org.eclipse.swt.widgets.Shell;

@Name("Create new queue")
public class CreateQueueAction  extends NodeActionListener {
    private QueueModule queueModule;

    public CreateQueueAction(QueueModule queuModule) {
        this.queueModule = queuModule;
    }

    @Override
    public void actionPerformed(NodeActionEvent e) {
        CreateQueueForm form = new CreateQueueForm(new Shell(), queueModule.getStorageAccount());

        form.setOnCreate(new Runnable() {
            @Override
            public void run() {
                queueModule.getParent().removeAllChildNodes();
                ((ClientStorageNode) queueModule.getParent()).load();
            }
        });
        form.open();
    }
}
