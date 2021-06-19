CodeMirror: RPM changes mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">RPM</a>

RPM changes mode
----------------

——————————————————————- Tue Oct 18 13:58:40 UTC 2011 - misterx@example.com - Update to r60.3 - Fixes bug in the reflect package \* disallow Interface method on Value obtained via unexported name ——————————————————————- Thu Oct 6 08:14:24 UTC 2011 - misterx@example.com - Update to r60.2 - Fixes memory leak in certain map types ——————————————————————- Wed Oct 5 14:34:10 UTC 2011 - misterx@example.com - Tweaks for gdb debugging - go.spec changes: - move %go\_arch definition to %prep section - pass correct location of go specific gdb pretty printer and functions to cpp as HOST\_EXTRA\_CFLAGS macro - install go gdb functions & printer - gdb-printer.patch - patch linker (src/cmd/ld/dwarf.c) to emit correct location of go gdb functions and pretty printer

RPM spec mode
-------------

\# \# spec file for package minidlna \# \# Copyright (c) 2011, Sascha Peilicke \# \# All modifications and additions to the file contributed by third parties \# remain the property of their copyright owners, unless otherwise agreed \# upon. The license for this file, and modifications and additions to the \# file, is the same license as for the pristine package itself (unless the \# license for the pristine package is not an Open Source License, in which \# case the license is the MIT License). An “Open Source License” is a \# license that conforms to the Open Source Definition (Version 1.9) \# published by the Open Source Initiative. Name: libupnp6 Version: 1.6.13 Release: 0 Summary: Portable Universal Plug and Play (UPnP) SDK Group: System/Libraries License: BSD-3-Clause Url: http://sourceforge.net/projects/pupnp/ Source0: http://downloads.sourceforge.net/pupnp/libupnp-%{version}.tar.bz2 BuildRoot: %{\_tmppath}/%{name}-%{version}-build %description The portable Universal Plug and Play (UPnP) SDK provides support for building UPnP-compliant control points, devices, and bridges on several operating systems. %package -n libupnp-devel Summary: Portable Universal Plug and Play (UPnP) SDK Group: Development/Libraries/C and C++ Provides: pkgconfig(libupnp) Requires: %{name} = %{version} %description -n libupnp-devel The portable Universal Plug and Play (UPnP) SDK provides support for building UPnP-compliant control points, devices, and bridges on several operating systems. %prep %setup -n libupnp-%{version} %build %configure –disable-static make %{?\_smp\_mflags} %install %makeinstall find %{buildroot} -type f -name ‘\*.la’ -exec rm -f {} ‘;’ %post -p /sbin/ldconfig %postun -p /sbin/ldconfig %files %defattr(-,root,root,-) %doc ChangeLog NEWS README TODO %{\_libdir}/libixml.so.\* %{\_libdir}/libthreadutil.so.\* %{\_libdir}/libupnp.so.\* %files -n libupnp-devel %defattr(-,root,root,-) %{\_libdir}/pkgconfig/libupnp.pc %{\_libdir}/libixml.so %{\_libdir}/libthreadutil.so %{\_libdir}/libupnp.so %{\_includedir}/upnp/ %changelog

**MIME types defined:** `text/x-rpm-spec`, `text/x-rpm-changes`.
