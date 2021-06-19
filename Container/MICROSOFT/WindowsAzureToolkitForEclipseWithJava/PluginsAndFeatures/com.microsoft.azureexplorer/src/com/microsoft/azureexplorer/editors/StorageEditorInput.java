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
package com.microsoft.azureexplorer.editors;

import com.microsoftopentechnologies.tooling.msservices.model.storage.ClientStorageAccount;
import com.microsoftopentechnologies.tooling.msservices.model.storage.StorageServiceTreeItem;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IPersistableElement;

public class StorageEditorInput implements IEditorInput {
    private ClientStorageAccount storageAccount;
    private StorageServiceTreeItem item;

    public StorageEditorInput(ClientStorageAccount storageAccount, StorageServiceTreeItem item) {
        this.storageAccount = storageAccount;
        this.item = item;
    }

    public ClientStorageAccount getStorageAccount() {
        return storageAccount;
    }

    public StorageServiceTreeItem getItem() {
        return item;
    }

    @Override
    public boolean exists() {
        return false;
    }

    @Override
    public ImageDescriptor getImageDescriptor() {
        return null;
    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public IPersistableElement getPersistable() {
        return null;
    }

    @Override
    public String getToolTipText() {
        return null;
    }

    @Override
    public Object getAdapter(Class aClass) {
        return null;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StorageEditorInput that = (StorageEditorInput) o;

        if (!storageAccount.getPrimaryKey().equals(that.storageAccount.getPrimaryKey())) return false;
        return item.getName().equals(that.item.getName());
    }

    @Override
    public int hashCode() {
        int result = storageAccount.getPrimaryKey().hashCode();
        result = 31 * result + item.getName().hashCode();
        return result;
    }
}
