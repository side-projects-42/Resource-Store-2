Tests that colors are not re-formatted inside url(...) when editing property values.

"white" background

"url( white )" background

"url(white.png)" background

"url(../foo/white.png)" background

"green url(white)" background

"url(white) green" background

"url(white) green, url(green)" background

"url(white), url(green)" background

"hsl(0, 50%, 50%) url(white)" background

"url(white) hsl(0, 50%, 50%)" background

"url(../black/white.png)" background
