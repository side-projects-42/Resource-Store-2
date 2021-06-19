FireBug-like reporting of CSS applied to a node
===============================================

Due to browser security, the `Y.Inspector` module currently has no support for external `<link>` elements. The place where it fails is marked in the code (you'll see the `try/catch`). Note that Safari and IE **DO** allow access xdomain stylesheets, so this only applies to FF and Opera (today).

Also outstanding are including inherited styles and dealing with Opera's lack of any way to determine if an prop was declared with !important.

The following markup is used as a testbed, and has rules applied inline, from a `<style>` element, a local `<link>` element and a remote `<link>` element. Note the remote css overrides the `text-transform: lowercase` from the local styles.

<span class="yui-console-entry-cat" style="font-style: italic; color: white;">INFO</span>

Results for `Y.Inspector.getCSS(Y.one('.yui-console-entry-cat'))`
