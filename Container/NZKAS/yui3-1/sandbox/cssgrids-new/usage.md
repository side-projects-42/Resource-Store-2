Using YUI Layout Blocks
=======================

50/50
-----

### This is a 1/2 unit (yui3-u-1-2)

This unit will fill half of its container.

### This is a 1/2 unit (yui3-u-1-2)

This unit will fill half of its container.

33/33/33 vertical align middle
------------------------------

### This is a 1/3 unit (yui3-u-1-3)

This unit will fill a third of its container.

### This is a 1/3 unit (yui3-u-1-3)

This unit will fill a third of its container.

This unit will fill a third of its container.

### This is a 1/3 unit (yui3-u-1-3)

25/25/25/25 vertical align mixed
--------------------------------

### This is a 1/4 unit (yui3-u-1-4)

This unit will fill a quarter of its container.

### This is a 1/4 unit (yui3-u-1-4)

This unit will fill a quarter of its container.

This unit will fill a quarter of its container.

### This is a 1/4 unit (yui3-u-1-4)

This unit will fill a quarter of its container.

This unit will fill a quarter of its container.

This unit will fill a quarter of its container.

### This is a 1/4 unit (yui3-u-1-4)

66/33
-----

### This is a 2/3 unit (yui3-u-1-3-2)

This unit will fill a two-thirds of its container.

This unit will fill a two-thirds of its container.

This unit will fill a two-thirds of its container.

### This is a 1/3 unit (yui3-u-1-3)

This unit will fill a third of its container.

66/ one sixth centered
----------------------

### This is a 2/3 unit (yui3-u-1-3-2)

This unit will fill a two-thirds of its container.

### This is a 1/6 unit (yui3-u-6)

This unit will fill a a sixth of its container.

two fifths right aligned
------------------------

### This is a 2/5 unit (yui3-u-5-2)

This unit will right align and fill two-fifths of its container.

25/50/25 reverse source order
-----------------------------

### This is a 1/4 unit (yui3-u-1-4)

This unit will fill a quarter of its container (source order 1).

### This is a 1/2 unit (yui3-u-1-4)

This unit will fill half of its container (source order 2).

### This is a 1/4 unit (yui3-u-1-4)

This unit will fill a quarter of its container (source order 3).

25/25/25/25 equal height
------------------------

### 1/4 equal height

### 1/4 equal height

This unit will fill a quarter of its container.

### 1/4 equal height

This unit will fill a quarter of its container.

This unit will fill a quarter of its container.

### 1/4 equal height

This unit will fill a quarter of its container. This unit will fill a quarter of its container. This unit will fill a quarter of its container.

Caveats
-------

-   the only children of yui3-g should be a yui3-u(-\*)
-   alignment and source direction handled using simple css properties ("text-align", "vertical-align", "direction", etc.)
-   equal heights are part of this demo only, not implemented in core grids css
