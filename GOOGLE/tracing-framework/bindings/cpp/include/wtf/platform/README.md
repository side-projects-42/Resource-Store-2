Platform Specific Support
-------------------------

The top level platform.h will select and include both an underlying platform implementation and a threading model.

Supported platforms:

-   myriad2sparc: Myriad 2 SPARC cores.
-   myriad2shave: (TODO) Myriad 2 SHAVE cores.
-   default: Standard platform using generic library calls.

TODO: The “default” platform has several POSIX-isms in it that should be disposed of in favor of C++ standard library calls.

Threading models:

-   pthreads\_threaded (default): Uses pthreads threading library.
-   std\_threaded: Uses C++ std threading library.
-   single\_threaded: Uses dummy threading constructs.

Platforms can force a single threaded model, or it is selectable via the WTF\_SINGLE\_THREADED define.
