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

package com.microsoftopentechnologies.azurecommons.storageregistry;

import java.util.ArrayList;
import java.util.List;
/**
 * Model class to store information
 * if we have storage accounts with same name
 * but different service endpoint URL in
 * storage registry.
 */
public class DuplicateAccounts {
	String accountName;
	List<Integer> indices = new ArrayList<Integer>();
	
	public DuplicateAccounts() {
		super();
	}

	public DuplicateAccounts(String accountName) {
		super();
		this.accountName = accountName;
	}

	public String getAccountName() {
		return accountName;
	}
	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}
	public List<Integer> getIndices() {
		return indices;
	}
	public void setIndices(List<Integer> indices) {
		this.indices = indices;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == this) {
			return true;
		}
		if (obj == null || obj.getClass() != this.getClass()) {
			return false;
		}
		DuplicateAccounts dpAcc = (DuplicateAccounts) obj;
		return (accountName != null
				&& accountName.equals(dpAcc.getAccountName()));
	}
}
