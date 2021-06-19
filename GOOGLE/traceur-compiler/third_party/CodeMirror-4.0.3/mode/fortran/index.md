CodeMirror: Fortran mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Fortran</a>

Fortran mode
------------

! Example Fortran code program average ! Read in some numbers and take the average ! As written, if there are no data points, an average of zero is returned ! While this may not be desired behavior, it keeps this example simple implicit none real, dimension(:), allocatable :: points integer :: number\_of\_points real :: average\_points=0., positive\_average=0., negative\_average=0. write (\*,\*) “Input number of points to average:” read (\*,\*) number\_of\_points allocate (points(number\_of\_points)) write (\*,\*) “Enter the points to average:” read (\*,\*) points ! Take the average by summing points and dividing by number\_of\_points if (number\_of\_points &gt; 0) average\_points = sum(points) / number\_of\_points ! Now form average over positive and negative points only if (count(points &gt; 0.) &gt; 0) then positive\_average = sum(points, points &gt; 0.) / count(points &gt; 0.) end if if (count(points &lt; 0.) &gt; 0) then negative\_average = sum(points, points &lt; 0.) / count(points &lt; 0.) end if deallocate (points) ! Print result to terminal write (\*,‘(a,g12.4)’) ‘Average =’, average\_points write (\*,‘(a,g12.4)’) ‘Average of positive points =’, positive\_average write (\*,‘(a,g12.4)’) ‘Average of negative points =’, negative\_average end program average

**MIME types defined:** `text/x-Fortran`.
