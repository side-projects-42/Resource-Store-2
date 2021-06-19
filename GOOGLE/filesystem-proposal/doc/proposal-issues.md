<span id="Issues-List">Issues List</span>
-----------------------------------------

------------------------------------------------------------------------

### Issue 1: What is the appropriate namespace?    Status: Tentatively resolved

#### Discussion

The N3335 proposal places the library in namespace `std::tr2::files`. Rationale for a sub-namespace is that the library uses several names that don't seem appropriate for namespace `tr2` since full standardization would then put the names into `std`. The function names `remove` and `rename` are of particular concern because these functions differ in behavior from current standard library functions with those names. It also doesn't seem desirable to preempt names like `equivalent` and ` status`.

#### Resolution

*Kona: Strong support for `filesystem` as the library's namespace. Strong support for a technical specification namespace that alerts uses that contents are likely to change if and when they later get moved into the standard.*

*No decision yet on a TR namespace; `tbs` being used as a placeholder. Thus the full namespace is changed to ` std::tbs::filesystem.`*

------------------------------------------------------------------------

### Issue 2: Excessive use of `const codecvt_type&` arguments    Status: Closed

#### Discussion

Users sometimes need to do path conversions that use something other than the imbued codecvt facet. The need is particularly acute in multi-threaded applications where changing the imbued facet would introduce a data race. That said, providing an optional `const codecvt_type&` argument for every function where the need might possibly arise is excessive because its use is so rare and it adds considerable interface clutter.

#### Resolution

*Kona:*

*Remove all existing class path `const codecvt_type&` arguments.*

*Beman to pursue separate encoding conversion functionality, per Thursday N3336 "Adapting standard library strings and IO to a Unicode World" discussion. See Kona wiki.*

*If a separate encoding conversion facility isn't possible, then some form of minimal class path encoding conversion facility will be needed. But..., the LWG would like to see use cases and clearer explanation of motivation before deciding on specifics, and be very sure that there is no way to achieve with existing std library functionality, albeit with some loss of efficiency.*

------------------------------------------------------------------------

### Issue 3: Possible "implicit cast to native type"?     Status: Open

#### Discussion

In Bloomington there was discussion of "implicit cast to implicit cast to native OS type to inter operate with existing iostream library and native functions instead of modifying fstream".

#### Proposed resolution

*Kona: The Dinkumware/Microsoft implementation has added an implicit conversion to the string type, eliminating any need to modify fstream. (Discussion: might be safer to make the implicit conversion protected, then make fstream classes friends).*

*Action: Beman to investigate, test, as avoiding modification of existing header and classes is much desired.*

------------------------------------------------------------------------

### Issue 4: Given move semantics, it is best not to return const strings.     Status: Closed

#### Discussion

The issue title pretty much says it all.

#### Resolution

*Kona: Return plain strings. Remove the permission for implementations to return const refs, since uses are not in performace critical code and subtle portability bugs may occur.*

*Action: Beman to apply to proposed wording.*

*Version 3: Resolution applied.*

------------------------------------------------------------------------

### Issue 5: Is there a way to handle characters that are illegal for particular OS?     Status: NAD

#### Discussion

Question raised by Pablo in Bloomington.

#### Proposed resolution

Beman suggests NAD, Future. I've done some work on this, including looking at systems like OpenVMS that have an escape mechanism to handle otherwise unrepresentable characters. There was a comment to that effect in N3239. I believe it should be deferred to some future release since (1) it is complex enough that I'd like to see actual implementation and use experience (presumably via Boost), and (2) I can't recall a user ever requesting such a feature.

*Kona: No consensus for change, since there doesn't appear to be any compelling use case.*

------------------------------------------------------------------------

### Issue 6: Could allocator support be added to class path?     Status: Open

#### Discussion

Question raised by a committee member in private email.

*Kona: Much discussion.*

*Action: Alisdair to write paper, based on a real implementation, so that it is possible to assess the impact on interface, performance, etc.*

*Post-Kona: Alisdair will defer paper until after TR.*

------------------------------------------------------------------------

### Issue 7: How should class path inserter and extractor be specified?       Status: Resolved

#### Discussion

Class `path` currently is specified to used the Boost detail ` quoted` stream manipulator. A path object is inserted delimited by quotes, and extracted accordingly, ensuring that paths containing spaces are round-tripped correctly.  Quotes in the path itself are escaped, and io state is saved and restored.

See <http://www.boost.org/doc/libs/1_48_0/libs/io/doc/quoted_manip.html>

Since the standard can't specify behavior in terms of something in Boost, we have to change the specification. Since the `quoted` stream manipulator is a handy little component, the issue is raised as to whether it should go in TR2.

#### Resolution

*Kona: Specify the path inserter and extractor to have the desired behavior without reference to how it is achieved. (If someone wants to propose a quoted manipulator, that's a separate proposal for a different TR.)*

*Action:  Beman to apply to proposed wording.*

*Version 3: Resolution applied.*

------------------------------------------------------------------------

### Issue 8: Rename `rename`       Status: New

#### Discussion

There are minor problems with the name of the `rename()` function:

-   There is already a "rename" function, albeit in namespace std, and it has different semantics as regards error handling. Thus giving the function a different name might reduce the chance of user error.
-   The name "move" would  better reflect the actual semantics, particularly for moves between directories., and this is the name used by some API's, console commands, and GUI file managers for that functionality.

#### Proposed resolution

Change the name of the `rename()` function to `move()`.

------------------------------------------------------------------------
