# Synthetics Tests

The Synthetics tests are designed to verify that the agent handles valid and invalid Synthetics requests.

Each test should run a simulated web transaction. A Synthetics HTTP request header is added to the incoming request at the beginning of a web transaction. During the course of the web transaction, an external request is made. And, at the completion of the web transaction, both a Transaction Trace and Transaction Event are recorded.

Each test then verifies that the correct attributes are added to the Transaction Trace and Transaction Event, and the proper request header is added to the external request when required. Or, in the case of an invalid Synthetics request, that the attributes and request header are **not** added.

## Name

<table><thead><tr class="header"><th>Name</th><th>Meaning</th></tr></thead><tbody><tr class="odd"><td><code>name</code></td><td>A human-meaningful name for the test case.</td></tr></tbody></table>

## Settings

The `settings` hash contains a number of key-value pairs that the agent will need to use for configuration for the test.

<table style="width:99%;"><colgroup><col style="width: 7%" /><col style="width: 92%" /></colgroup><thead><tr class="header"><th>Name</th><th>Meaning</th></tr></thead><tbody><tr class="odd"><td><code>agentEncodingKey</code></td><td>The encoding key used by the agent for deobfuscation of the Synthetics request header.</td></tr><tr class="even"><td><code>syntheticsEncodingKey</code></td><td>The encoding key used by Synthetics to obfuscate the Synthetics request header. In most tests, <code>agentEncodingKey</code> and <code>syntheticsEncodingKey</code> are the same.</td></tr><tr class="odd"><td><code>transactionGuid</code></td><td>The GUID of the simulated transaction. In a non-simulated transaction, this will be randomly generated. But, for testing purposes, you should assign this value as the GUID, since the tests will check for this value to be set in the <code>nr.guid</code> attribute of the Transaction Event.</td></tr><tr class="even"><td><code>trustedAccountIds</code></td><td>A list of accounts ids that the agent trusts. If the Synthetics request contains a non-trusted account id, it is an invalid request.</td></tr></tbody></table>

## Inputs

The input for each test is a Synthetics request header. The test fixture file shows both the de-obfuscated version of the payload, as well as the resulting obfuscated version.

<table style="width:99%;"><colgroup><col style="width: 12%" /><col style="width: 87%" /></colgroup><thead><tr class="header"><th>Name</th><th>Meaning</th></tr></thead><tbody><tr class="odd"><td><code>inputHeaderPayload</code></td><td>A decoded form of the contents of the <code>X-NewRelic-Synthetics</code> request header.</td></tr><tr class="even"><td><code>inputObfuscatedHeader</code></td><td>An obfuscated form of the <code>X-NewRelic-Synthetics</code> request header. If you obfuscate <code>inputHeaderPayload</code> using the <code>syntheticsEncodingKey</code>, this should be the output.</td></tr></tbody></table>

## Outputs

There are three different outputs that are tested for: Transaction Trace, Transaction Event, and External Request Header.

### outputTransactionTrace

The `outputTransactionTrace` hash contains three objects:

<table style="width:99%;"><colgroup><col style="width: 4%" /><col style="width: 95%" /></colgroup><thead><tr class="header"><th>Name</th><th>Meaning</th></tr></thead><tbody><tr class="odd"><td><code>header</code></td><td>The last field of the transaction sample array should be set to the Synthetics Resource ID for a Synthetics request, and should be set to <code>null</code> if it isn’t. (The last field in the array is the 10th element in the header array, but is <code>header[9]</code> in zero-based array notation, so the key name is <code>field_9</code>.)</td></tr><tr class="even"><td><code>expectedIntrinsics</code></td><td>A set of key-value pairs that represent the attributes that should be set in the intrinsics section of the Transaction Trace. <strong>Note</strong>: If the agent has not implemented the Agent Attributes spec, then the agent should save the attributes in the <code>Custom</code> section, and the attribute names should have ‘nr.’ prepended to them. Read the spec for details. For agents in this situation, they will need to adjust the expected output of the tests accordingly.</td></tr><tr class="odd"><td><code>nonExpectedIntrinsics</code></td><td>An array of names that represent the attributes that should <strong>not</strong> be set in the intrinsics section of the Transaction Trace.</td></tr></tbody></table>

### outputTransactionEvent

The `outputTransactionEvent` hash contains two objects:

<table style="width:99%;"><colgroup><col style="width: 15%" /><col style="width: 84%" /></colgroup><thead><tr class="header"><th>Name</th><th>Meaning</th></tr></thead><tbody><tr class="odd"><td><code>expectedAttributes</code></td><td>A set of key-value pairs that represent the attributes that should be set in the <code>Intrinsic</code> hash of the Transaction Event.</td></tr><tr class="even"><td><code>nonExpectedAttributes</code></td><td>An array of names that represent the attributes that should <strong>not</strong> be set in the <code>Intrinsic</code> hash of the Transaction Event.</td></tr></tbody></table>

### outputExternalRequestHeader

The `outputExternalRequestHeader` hash contains two objects:

<table style="width:99%;"><colgroup><col style="width: 10%" /><col style="width: 89%" /></colgroup><thead><tr class="header"><th>Name</th><th>Meaning</th></tr></thead><tbody><tr class="odd"><td><code>expectedHeader</code></td><td>The outbound header that should be added to external requests (similar to the CAT header), when the original request was made from a valid Synthetics request.</td></tr><tr class="even"><td><code>nonExpectedHeader</code></td><td>The outbound header that should <strong>not</strong> be added to external requests, when the original request was made from a non-Synthetics request.</td></tr></tbody></table>
