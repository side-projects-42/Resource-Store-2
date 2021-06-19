Testing YUI with more than one version of the seed file present: <span id="test"></span>

YUI 3 breaks down when more than one version of the seed file is present on the page. While it is silly to manually include two seed files as I've done in this isolated test case, it seems reasonable that a dynamically loaded module or script may include it's own version of the YUI 3 seed file within it because (a) it doesn't know if YUI will be available on the parent page or (b) it depends on a specific version of YUI.

In my priliminary debuging the immediate error is thrown because `VERSION` is only set for the first loaded version and not subsequent in `YUI.Env._loaded`.
