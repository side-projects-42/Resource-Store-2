CodeMirror: ECL mode
====================

/\* sample useless code to demonstrate ecl syntax highlighting this is a multiline comment! \*/ // this is a singleline comment! import ut; r := record string22 s1 := ‘123’; integer4 i1 := 123; end; \#option(‘tmp’, true); d := dataset(‘tmp::qb’, r, thor); output(d);

Based on CodeMirror’s clike mode. For more information see [HPCC Systems](http://hpccsystems.com) web site.

**MIME types defined:** `text/x-ecl`.
