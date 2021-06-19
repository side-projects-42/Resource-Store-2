/**
 * Copyright (c) Microsoft Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use 
 * this file except in compliance with the License. You may obtain a copy of the 
 * License at http://www.apache.org/licenses/LICENSE-2.0.
 *  
 * THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS 
 * OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION 
 * ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
 * MERCHANTABLITY OR NON-INFRINGEMENT. 
 *
 * See the Apache Version 2.0 License for specific language governing 
 * permissions and limitations under the License.
 */

package com.interopbridges.scx.jmx;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * <p>
 * Simple unit-tests to verify / double-check the hard-coded boolean values are
 * not changed.
 * </p>
 * 
 * @author Christopher Crammond
 * 
 */
public class TomcatJMXAbstractionTest
{
    private TomcatJMXAbstraction tomcatJmxStore;

    /**
     * <p>
     * Test Setup/preparation method that resets/initializes all test specific
     * variables.
     * </p>
     */
    @Before
    public void setup() throws Exception
    {
        tomcatJmxStore = new TomcatJMXAbstraction();
    }

    /**
     * <p>
     * Method invoked after each unit-test in this class.
     * </p>
     */
    @After
    public void TearDown()
    {
        tomcatJmxStore = null;
    }

    /**
     * <p>
     * The Tomcat abstraction represents a stand-alone JMX Store
     * </p>
     */
    @Test
    public void testIsStandAloneJmxStore()
    {
        Assert.assertFalse(tomcatJmxStore.isStandAloneJmxStore());
    }

}
