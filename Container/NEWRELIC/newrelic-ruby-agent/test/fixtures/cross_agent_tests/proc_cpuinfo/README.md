These tests are for determining the numbers of physical packages, physical cores, and logical processors from the data returned by /proc/cpuinfo on Linux hosts. Each text file in this directory is the output of /proc/cpuinfo on various machines.

The names of all test files should be of the form `Apack_Bcore_Clogical.txt` where `A`, `B`, and `C` are integers or the character `X`. For example, a single quad-core processor without hyperthreading would correspond to `1pack_4core_4logical.txt`, while two 6-core processors with hyperthreading would correspond to `2pack_12core_24logical.txt`, and would be pretty sweet.

Using `A`, `B`, and `C` from above, code processing the text in these files should produce the following expected values:

<table><thead><tr class="header"><th>property</th><th>value</th></tr></thead><tbody><tr class="odd"><td># physical packages</td><td><code>A</code></td></tr><tr class="even"><td># physical cores</td><td><code>B</code></td></tr><tr class="odd"><td># logical processors</td><td><code>C</code></td></tr></tbody></table>

(Obviously, the processing code should do this with no knowledge of the filenames.)

If any of `A`, `B`, or `C` are the character `X` instead of an integer, then processing code should not return a value (return `null`, return `nil`, raise an exception… whatever makes most sense for your agent).

There is a malformed.txt file which is a random file that does not adhere to any /proc/cpuinfo format. The expected result is `null` for packages, cores and processors.
