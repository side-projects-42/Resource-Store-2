<table><tbody><tr class="odd"><td><a href="../../../index.htm"><img src="../../../boost.png" alt="boost.png (6897 bytes)" width="300" height="86" /></a></td><td>Filesystem Tutorial</td></tr></tbody></table>

<table><tbody><tr class="odd"><td><a href="index.htm">Filesystem Home</a>    <a href="release_history.html">Releases</a>    <a href="reference.html">Reference</a>    <a href="tutorial.html">Tutorial</a>    <a href="faq.htm">FAQ</a>    <a href="portability_guide.htm">Portability</a>    <a href="v3.html">V3 Intro</a>    <a href="v3_design.html">V3 Design</a>    <a href="deprecated.html">Deprecated</a>   </td></tr></tbody></table>

[Introduction](#Introduction)  
[Preliminaries](#Preliminaries)  
[Reporting the size of a file - (tut1.cpp)](#Reporting-size)  
[Using status queries to determine file existence and type - (tut2.cpp)](#Using-status-queries)  
[Directory iteration plus catching exceptions - (tut3.cpp)](#Directory-iteration)  
[Using path decomposition, plus sorting results - (tut4.cpp)](#Using-path-decomposition)  
[Class path: Constructors, including Unicode - (tut5.cpp)](#Class-path-Constructors)  
[Class path: Generic format vs. Native format](#Class-path-formats)  
[Class path: Iterators, observers, composition, decomposition, and query - (path\_info.cpp)](#Class%20path-iterators-etc)  
[Error reporting](#Error-reporting)

<span id="Introduction">Introduction</span>
-------------------------------------------

This tutorial develops a little command line program to list information about files and directories - essentially a much simplified version of the POSIX `ls` or Windows `dir` commands. We’ll start with the simplest possible version and progress to more complex functionality. Along the way we’ll digress to cover topics you’ll need to know about to understand Boost.Filesystem.

Source code for each of the tutorial programs is available, and you are encouraged to compile, test, and experiment with it. To conserve space, we won’t always show boilerplate code here, but the provided source is complete and ready to build.

<span id="Preliminaries">Preliminaries</span>
---------------------------------------------

Install the Boost distribution if you haven’t already done so. See the [Boost Getting Started](http://www.boost.org/more/getting_started/index.html) docs.

This tutorial assumes you are going to compile and test the examples using the provided scripts. That’s highly recommended.

> **If you are planning to compile and test the examples but not use the scripts, make sure your build setup knows where to locate or build the Boost library binaries.**

Fire up your command line interpreter, and type the following commands:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ cd boost-root/libs/filesystem/example/test
$ ./setup
$ ./bld
$ ./tut1
Usage: tut1 path</code></pre></td><td style="text-align: center;"><pre><code>&gt;cd boost-root\libs\filesystem\example\test
&gt;setup
&gt;bld
&gt;tut1
Usage: tut1 path</code></pre></td></tr></tbody></table>

If the `tut1` command outputs “`Usage: tut1 path`”, all is well. A set of tutorial programs has been copied (by `setup`) to ***`boost-root`***`/libs/filesystem/example/test` and then built. You are encouraged to modify and experiment with them as the tutorial progresses. Just invoke the `bld` script again to rebuild.

If something didn’t work right, here are troubleshooting suggestions:

-   The `bjam` program executable isn’t being found. Check your path environmental variable if it should have been found, otherwise see [Boost Getting Started](http://www.boost.org/more/getting_started/windows.html).  
     
-   Look at `bjam.log` to try to spot an indication of the problem.

<span id="Reporting-size">Reporting the size of a file</span> - ([tut1.cpp](../example/tut1.cpp))
-------------------------------------------------------------------------------------------------

Let’s get started. One of the simplest things we can do is report the size of a file.

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>tut1.cpp</code></pre><blockquote><pre><code>#include &lt;iostream&gt;
#include &lt;boost/filesystem.hpp&gt;
using namespace boost::filesystem;

int main(int argc, char* argv[])
{
  if (argc &lt; 2)
  {
    std::cout &lt;&lt; &quot;Usage: tut1 path\n&quot;;
    return 1;
  }
  std::cout &lt;&lt; argv[1] &lt;&lt; &quot; &quot; &lt;&lt; file_size(argv[1]) &lt;&lt; &#39;\n&#39;;
  return 0;
}</code></pre></blockquote></td></tr></tbody></table>

The Boost.Filesystem `file_size` function returns a `uintmax_t` containing the size of the file named by the argument. The declaration looks like this:

>     uintmax_t file_size(const path& p);

For now, all you need to know is that class path has constructors that take `const char *` and many other useful types. (If you can’t wait to find out more, skip ahead to the [class path](#Class-path-Constructors) section of the tutorial.)

Please take a minute to try out `tut1` on your system, using a file that is known to exist, such as `tut1.cpp`. Here is what the results look like on two different operating systems:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./tut1 tut1.cpp
tut1.cpp 569</code></pre><pre><code>$ ls -l tut1.cpp
-rwxrwxrwx 1 root root 569 2010-02-01 07:31 tut1.cpp</code></pre></td><td style="text-align: center;"><pre><code>&gt;tut1 tut1.cpp
tut1.cpp 592
&gt;dir tut1.cpp
...
01/30/2010 10:47 AM 592 tut1.cpp
...</code></pre></td></tr></tbody></table>

So far, so good. The reported Linux and Windows sizes are different because the Linux tests used `"\n"` line endings, while the Windows tests used `"\r\n"` line endings.

Now try again, but give a path that doesn’t exist:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./tut1 foo
terminate called after throwing an instance of &#39;boost::exception_detail::
clone_impl&lt;boost::exception_detail::error_info_injector&lt;boost::
filesystem::filesystem_error&gt; &gt;&#39;
  what(): boost::filesystem::file_size: No such file or directory: &quot;foo&quot;
Aborted</code></pre></td><td style="text-align: center;"><pre><code>&gt;tut1 foo</code></pre><p><strong><em>An exception is thrown; the exact form of the response depends on Windows system options.</em></strong></p></td></tr></tbody></table>

What happens? There’s no file named `foo` in the current directory, so an exception is thrown.

Try this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./tut1 .
terminate called after throwing an instance of &#39;boost::exception_detail::
clone_impl&lt;boost::exception_detail::error_info_injector&lt;boost::
filesystem::filesystem_error&gt; &gt;&#39;
  what(): boost::filesystem::file_size: Operation not permitted &quot;.&quot;
Aborted</code></pre></td><td style="text-align: center;"><pre><code>&gt;tut1 .</code></pre><p><strong><em>An exception is thrown; the exact form of the response depends on Windows system options.</em></strong></p></td></tr></tbody></table>

The current directory exists, but `file_size()` works on regular files, not directories, so again, an exception is thrown.

We’ll deal with those situations in `tut2.cpp`.

<span id="Using-status-queries">Using status queries to determine file existence and type</span> - ([tut2.cpp](../example/tut2.cpp))
------------------------------------------------------------------------------------------------------------------------------------

Boost.Filesystem includes status query functions such as `exists`, `is_directory`, and `is_regular_file`. These return `bool`’s, and will return `true` if the condition described by their name is met. Otherwise they return `false`, including when any element of the path argument can’t be found.

tut2.cpp uses several of the status query functions to cope with non-existent files and with different kinds of files:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>tut2.cpp</code></pre><blockquote><pre><code>int main(int argc, char* argv[])
{
  path p (argv[1]);   // p reads clearer than argv[1] in the following code

  if (exists(p))    // does p actually exist?
  {
    if (is_regular_file(p))        // is p a regular file?   
      cout &lt;&lt; p &lt;&lt; &quot; size is &quot; &lt;&lt; file_size(p) &lt;&lt; &#39;\n&#39;;

    else if (is_directory(p))      // is p a directory?
      cout &lt;&lt; p &lt;&lt; &quot;is a directory\n&quot;;

    else
      cout &lt;&lt; p &lt;&lt; &quot;exists, but is neither a regular file nor a directory\n&quot;;
  }
  else
    cout &lt;&lt; p &lt;&lt; &quot;does not exist\n&quot;;

  return 0;
}</code></pre></blockquote></td></tr></tbody></table>

Give it a try:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./tut2 tut2.cpp
tut2 size is cpp 1037
$ ./tut2 foo
foo does not exist
$ ./tut2 .
. is a directory</code></pre></td><td style="text-align: center;"><pre><code>&gt;tut2 tut2.cpp
tut2.cpp size is 1079

&gt;tut2 foo
foo does not exist

&gt;tut2 .
. is a directory</code></pre></td></tr></tbody></table>

Although tut2 works OK in these tests, the output is less than satisfactory for a directory. We’d typically like to see a list of the directory’s contents. In `tut3.cpp` we will see how to iterate over directories.

But first, let’s try one more test:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ls /home/jane/foo
ls: cannot access /home/jane/foo: Permission denied
$ ./tut2 /home/jane/foo
terminate called after throwing an instance of &#39;boost::exception_detail::
clone_impl&lt;boost::exception_detail::error_info_injector&lt;boost::
filesystem::filesystem_error&gt; &gt;&#39;
   what(): boost::filesystem::status: Permission denied:
     &quot;/home/jane/foo&quot;
Aborted</code></pre></td><td style="text-align: center;"><pre><code>&gt;dir e:\
The device is not ready.
&gt;tut2 e:\</code></pre><p><strong><em>An exception is thrown; the exact form of the response depends on Windows system options.</em></strong></p></td></tr></tbody></table>

On the Linux system, the test was being run from an account that did not have permission to access `/home/jane/foo`. On the Windows system, `e:` was a Compact Disc reader/writer that was not ready. End users shouldn’t have to interpret cryptic exceptions reports, so as we move on to `tut3.cpp` we will increase the robustness of the code, too.

<span id="Directory-iteration">Directory iteration</span> plus catching exceptions - ([tut3.cpp](../example/tut3.cpp))
----------------------------------------------------------------------------------------------------------------------

Boost.Filesystem’s `directory_iterator` class is just what we need here. It follows the general pattern of the standard library’s `istream_iterator`. Constructed from a path, it iterates over the contents of the directory. A default constructed `directory_iterator` acts as the end iterator.

The value type of `directory_iterator` is `directory_entry`. A `directory_entry` object contains a `path` and `file_status` information.  A `directory_entry` object can be used directly, but can also be passed to `path` arguments in function calls.

The other need is increased robustness in the face of the many kinds of errors that can affect file system operations. We could do that at the level of each call to a Boost.Filesystem function (see [Error reporting](#Error-reporting)), but it is easier to supply an overall try/catch block.

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>tut3.cpp</code></pre><blockquote><pre><code>int main(int argc, char* argv[])
{
  path p (argv[1]);   // p reads clearer than argv[1] in the following code

  try
  {
    if (exists(p))    // does p actually exist?
    {
      if (is_regular_file(p))        // is p a regular file?   
        cout &lt;&lt; p &lt;&lt; &quot; size is &quot; &lt;&lt; file_size(p) &lt;&lt; &#39;\n&#39;;

      else if (is_directory(p))      // is p a directory?
      {
        cout &lt;&lt; p &lt;&lt; &quot; is a directory containing:\n&quot;;

        copy(directory_iterator(p), directory_iterator(), // directory_iterator::value_type
          ostream_iterator&lt;directory_entry&gt;(cout, &quot;\n&quot;)); // is directory_entry, which is
                                                          // converted to a path by the
                                                          // path stream inserter
      }

      else
        cout &lt;&lt; p &lt;&lt; &quot; exists, but is neither a regular file nor a directory\n&quot;;
    }
    else
      cout &lt;&lt; p &lt;&lt; &quot; does not exist\n&quot;;
  }

  catch (const filesystem_error&amp; ex)
  {
    cout &lt;&lt; ex.what() &lt;&lt; &#39;\n&#39;;
  }

  return 0;
}</code></pre></blockquote></td></tr></tbody></table>

Give `tut3` a try, passing it a path to a directory as a command line argument. Here is a run on a checkout of the Boost Subversion trunk, followed by a repeat of the test cases that caused exceptions on Linux and Windows:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./tut3 ~/boost/trunk
/home/beman/boost/trunk is a directory containing:
  /home/beman/boost/trunk/tools
  /home/beman/boost/trunk/boost-build.jam
  /home/beman/boost/trunk/dist
  /home/beman/boost/trunk/doc
  /home/beman/boost/trunk/bootstrap.sh
  /home/beman/boost/trunk/index.html
  /home/beman/boost/trunk/bootstrap.bat
  /home/beman/boost/trunk/boost.css
  /home/beman/boost/trunk/INSTALL
  /home/beman/boost/trunk/rst.css
  /home/beman/boost/trunk/boost
  /home/beman/boost/trunk/people
  /home/beman/boost/trunk/wiki
  /home/beman/boost/trunk/boost.png
  /home/beman/boost/trunk/LICENSE_1_0.txt
  /home/beman/boost/trunk/more
  /home/beman/boost/trunk/Jamroot
  /home/beman/boost/trunk/.svn
  /home/beman/boost/trunk/libs
  /home/beman/boost/trunk/index.htm
  /home/beman/boost/trunk/status
  /home/beman/boost/trunk/CMakeLists.txt</code></pre></td><td style="text-align: center;"><pre><code>&gt;tut3 c:\boost\trunk
c:\boost\trunk is a directory containing:
   c:\boost\trunk\.svn
   c:\boost\trunk\boost
   c:\boost\trunk\boost-build.jam
   c:\boost\trunk\boost.css
   c:\boost\trunk\boost.png
   c:\boost\trunk\bootstrap.bat
   c:\boost\trunk\bootstrap.sh
   c:\boost\trunk\CMakeLists.txt
   c:\boost\trunk\dist
   c:\boost\trunk\doc
   c:\boost\trunk\index.htm
   c:\boost\trunk\index.html
   c:\boost\trunk\INSTALL
   c:\boost\trunk\Jamroot
   c:\boost\trunk\libs
   c:\boost\trunk\LICENSE_1_0.txt
   c:\boost\trunk\more
   c:\boost\trunk\people
   c:\boost\trunk\rst.css
   c:\boost\trunk\status
   c:\boost\trunk\tools
   c:\boost\trunk\wiki

&gt;tut3 e:\
boost::filesystem::status: The device is not ready: &quot;e:\&quot;</code></pre></td></tr></tbody></table>

Not bad, but we can make further improvements:

-   The listing would be much easier to read if only the filename was displayed, rather than the full path.  
     
-   The Linux listing isn’t sorted. That’s because the ordering of directory iteration is unspecified. Ordering depends on the underlying operating system API and file system specifics. So we need to sort the results ourselves.

Move on to `tut4.cpp` to see how those changes play out!

<span id="Using-path-decomposition">Using path decomposition, plus sorting results</span> - ([tut4.cpp](../example/tut4.cpp))
-----------------------------------------------------------------------------------------------------------------------------

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>tut4.cpp</code></pre><blockquote><pre><code>int main(int argc, char* argv[])
{
  path p (argv[1]);   // p reads clearer than argv[1] in the following code

  try
  {
    if (exists(p))    // does p actually exist?
    {
      if (is_regular_file(p))        // is p a regular file?   
        cout &lt;&lt; p &lt;&lt; &quot; size is &quot; &lt;&lt; file_size(p) &lt;&lt; &#39;\n&#39;;

      else if (is_directory(p))      // is p a directory?
      {
        cout &lt;&lt; p &lt;&lt; &quot; is a directory containing:\n&quot;;

        typedef vector&lt;path&gt; vec;             // store paths,
        vec v;                                // so we can sort them later

        copy(directory_iterator(p), directory_iterator(), back_inserter(v));

        sort(v.begin(), v.end());             // sort, since directory iteration
                                              // is not ordered on some file systems
  
        for (vec::const_iterator it (v.begin()); it != v.end(); ++it)
        {
          cout &lt;&lt; &quot;   &quot; &lt;&lt; *it &lt;&lt; &#39;\n&#39;;
        }
      }

      else
        cout &lt;&lt; p &lt;&lt; &quot; exists, but is neither a regular file nor a directory\n&quot;;
    }
    else
      cout &lt;&lt; p &lt;&lt; &quot; does not exist\n&quot;;
  }

  catch (const filesystem_error&amp; ex)
  {
    cout &lt;&lt; ex.what() &lt;&lt; &#39;\n&#39;;
  }

  return 0;
}</code></pre></blockquote></td></tr></tbody></table>

The key difference between `tut3.cpp` and `tut4.cpp` is what happens in the directory iteration loop. We changed:

>     cout << " " << *it << '\n';   // *it returns a directory_entry,

to:

>     path fn = it->path().filename();   // extract the filename from the path
>     v.push_back(fn);                   // push into vector for later sorting

`path()` is a `directory_entry` observer function. `filename()` is one of several path decomposition functions. It extracts the filename portion (`"index.html"`) from a path (`"/home/beman/boost/trunk/index.html"`). These decomposition functions are more fully explored in the [Path iterators, observers, composition, decomposition and query](#Class%20path-iterators-etc) portion of this tutorial.

The above was written as two lines of code for clarity. It could have been written more concisely as:

>     v.push_back(it->path().filename()); // we only care about the filename

Here is the output from a test of `tut4.cpp`:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./tut4 ~/boost/trunk
/home/beman/boost/trunk is a directory containing:
  .svn
  CMakeLists.txt
  INSTALL
  Jamroot
  LICENSE_1_0.txt
  boost
  boost-build.jam
  boost.css
  boost.png
  bootstrap.bat
  bootstrap.sh
  doc
  index.htm
  index.html
  libs
  more
  people
  rst.css
  status
  tools
  wiki</code></pre></td><td style="text-align: center;"><pre><code>C:\v3d&gt;tut4 c:\boost\trunk
c:\boost\trunk is a directory containing:
  .svn
  CMakeLists.txt
  INSTALL
  Jamroot
  LICENSE_1_0.txt
  boost
  boost-build.jam
  boost.css
  boost.png
  bootstrap.bat
  bootstrap.sh
  doc
  index.htm
  index.html
  libs
  more
  people
  rst.css
  status
  tools
  wiki</code></pre></td></tr></tbody></table>

That completes the main portion of this tutorial. If you haven’t already worked through the [Class path](#Class-path-Constructors) sections of this tutorial, dig into them now. The [Error reporting](#Error-reporting) section may also be of interest, although it can be skipped unless you are deeply concerned about error handling issues.

------------------------------------------------------------------------

 <span id="Class-path-Constructors">Class path: Constructors</span>, including Unicode - ([tut5.cpp](../example/tut5.cpp))
--------------------------------------------------------------------------------------------------------------------------

Traditional C interfaces pass paths as `const char*` arguments. C++ interfaces may add `const std::string&` overloads, but adding overloads becomes untenable if wide characters, containers, and iterator ranges need to be supported.

Passing paths as `const path&` arguments is far simpler, yet far more flexible because class `path` itself is far more flexible:

1.  Class `path` supports multiple character types and encodings, including Unicode, to ease internationalization.
2.  Class `path` supports multiple source types, such as iterators for null terminated sequences, iterator ranges, containers (including `std::basic_string`), and `directory_entry`’s, so functions taking paths don’t need to provide several overloads.
3.  Class `path` supports both native and generic pathname formats, so programs can be portable between operating systems yet use native formats where desirable.
4.  Class `path` supplies a full set of iterators, observers, composition, decomposition, and query functions, making pathname manipulations easy, convenient, reliable, and portable.

Here is how (1) and (2) work. Class path constructors, assignments, and appends have member templates for sources. For example, here are the constructors that take sources:

>     template <class Source>
>       path(Source const& source);
>
>     template <class InputIterator>
>       path(InputIterator begin, InputIterator end);

Let’s look at a little program that shows how comfortable class `path` is with both narrow and wide characters in C-style strings, C++ strings, and via C++ iterators:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>tut5.cpp</code></pre><blockquote><pre><code>#include &lt;boost/filesystem.hpp&gt;
#include &lt;string&gt;
#include &lt;list&gt;
namespace fs = boost::filesystem;

int main()
{
  // \u263A is &quot;Unicode WHITE SMILING FACE = have a nice day!&quot;
  std::string narrow_string (&quot;smile2&quot;);
  std::wstring wide_string (L&quot;smile2\u263A&quot;);
  std::list&lt;char&gt; narrow_list;
  narrow_list.push_back(&#39;s&#39;);
  narrow_list.push_back(&#39;m&#39;);
  narrow_list.push_back(&#39;i&#39;);
  narrow_list.push_back(&#39;l&#39;);
  narrow_list.push_back(&#39;e&#39;);
  narrow_list.push_back(&#39;3&#39;);
  std::list&lt;wchar_t&gt; wide_list;
  wide_list.push_back(L&#39;s&#39;);
  wide_list.push_back(L&#39;m&#39;);
  wide_list.push_back(L&#39;i&#39;);
  wide_list.push_back(L&#39;l&#39;);
  wide_list.push_back(L&#39;e&#39;);
  wide_list.push_back(L&#39;3&#39;);
  wide_list.push_back(L&#39;\u263A&#39;);

  { fs::ofstream f(&quot;smile&quot;); }
  { fs::ofstream f(L&quot;smile\u263A&quot;); }
  { fs::ofstream f(narrow_string); }
  { fs::ofstream f(wide_string); }
  { fs::ofstream f(narrow_list); }
  { fs::ofstream f(wide_list); }
  narrow_list.pop_back();
  narrow_list.push_back(&#39;4&#39;);
  wide_list.pop_back();
  wide_list.pop_back();
  wide_list.push_back(L&#39;4&#39;);
  wide_list.push_back(L&#39;\u263A&#39;);
  { fs::ofstream f(fs::path(narrow_list.begin(), narrow_list.end())); }
  { fs::ofstream f(fs::path(wide_list.begin(), wide_list.end())); }

  return 0;
}</code></pre></blockquote></td></tr></tbody></table>

Testing `tut5`:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./tut5
$ ls smile*
smile smile☺ smile2 smile2☺ smile3 smile3☺ smile4 smile4☺</code></pre></td><td style="text-align: center;"><pre><code>&gt;tut5
&gt;dir /b smile*
smile
smile2
smile2☺
smile3
smile3☺
smile4
smile4☺
smile☺</code></pre></td></tr></tbody></table>

Note that the exact appearance of the smiling face will depend on the font, font size, and other settings for your command line window. The above tests were run with out-of-the-box Ubuntu 9.10 and Windows 7, US Edition. If you don’t get the above results, take a look at the `boost-root/libs/filesystem/example/test` directory with your system’s GUI file browser, such as Linux Nautilus, Mac OS X Finder, or Windows Explorer. These tend to be more comfortable with international character sets than command line interpreters.

Class `path` takes care of whatever character type or encoding conversions are required by the particular operating system. Thus as `tut5` demonstrates, it’s no problem to pass a wide character string to a Boost.Filesystem operational function even if the underlying operating system uses narrow characters, and visa versa. And the same applies to user supplied functions that take `const path&` arguments.

Class `path` also provides path syntax that is portable across operating systems, element iterators, and observer, composition, decomposition, and query functions to manipulate the elements of a path. The next section of this tutorial deals with path syntax.

------------------------------------------------------------------------

<span id="Class-path-formats">Class path: Generic format vs. Native format</span>
---------------------------------------------------------------------------------

Class `path` deals with two different pathname formats - generic format and native format. For POSIX-like file systems, these formats are the same. But for users of Windows and other non-POSIX file systems, the distinction is important. Even programmers writing for POSIX-like systems need to understand the distinction if they want their code to be portable to non-POSIX systems.

The **generic format** is the familiar `/my_directory/my_file.txt` format used by POSIX-like operating systems such as the Unix variants, Linux, and Mac OS X. Windows also recognizes the generic format, and it is the basis for the familiar Internet URL format. The directory separator character is always one or more slash characters.

The **native format** is the format as defined by the particular operating system. For Windows, either the slash or the backslash can be used as the directory separator character, so `/my_directory\my_file.txt` would work fine. Of course, if you write that in a C++ string literal, it becomes `"/my_directory\\my_file.txt"`.

If a drive specifier or a backslash appears in a pathname on a Windows system, it is always treated as the native format.

Class `path` has observer functions that allow you to obtain the string representation of a path object in either the native format or the generic format. See the [next section](#Class%20path-iterators-etc) for how that plays out.

The distinction between generic format and native format is important when communicating with native C-style API’s and with users. Both tend to expect paths in the native format and may be confused by the generic format. The generic format is great, however, for writing portable programs that work regardless of operating system.

The next section covers class `path` observers, composition, decomposition, query, and iteration over the elements of a path.

------------------------------------------------------------------------

<span id="Class path-iterators-etc">Class path: Iterators, observers, composition, decomposition, and query</span> - ([path\_info.cpp](../example/path_info.cpp))
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

The `path_info.cpp` program is handy for learning how class `path` iterators, observers, composition, decomposition, and query functions work on your system. If it hasn’t already already been built on your system, please build it now. Run the examples below on your system, and try some different path arguments as we go along.

`path_info` produces several dozen output lines every time it’s invoked. We will only show the output lines we are interested in at each step.

First we’ll look at iteration over the elements of a path, and then use iteration to illustrate the difference between generic and native format paths.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./path_info /foo/bar/baa.txt
...
elements:
  /
  foo
  bar
  baa.txt</code></pre></td><td style="text-align: center;"><pre><code>&gt;path_info /foo/bar/baa.txt
...
elements:
  /
  foo
  bar
  baa.txt</code></pre></td></tr></tbody></table>

Thus on both POSIX and Windows based systems the path `"/foo/bar/baa.txt"` is seen as having four elements.

Here is the code that produced the above listing:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><blockquote><pre><code>cout &lt;&lt; &quot;\nelements:\n&quot;;

for (path::iterator it = p.begin(); it != p.end(); ++it)
  cout &lt;&lt; &quot; &quot; &lt;&lt; *it &lt;&lt; &#39;\n&#39;;</code></pre></blockquote></td></tr></tbody></table>

`path::iterator::value_type` is `path::string_type`, and iteration treats `path` as a container of filenames.

Let’s look at some of the output from a slightly different example:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./path_info /foo/bar/baa.txt

composed path:
  cout &lt;&lt; -------------: /foo/bar/baa.txt
  preferred()----------: /foo/bar/baa.txt
...
observers, native format:
  native()-------------: /foo/bar/baa.txt
  c_str()--------------: /foo/bar/baa.txt
  string()-------------: /foo/bar/baa.txt
  wstring()------------: /foo/bar/baa.txt

observers, generic format:
  generic_string()-----: /foo/bar/baa.txt
  generic_wstring()----: /foo/bar/baa.txt</code></pre></td><td style="text-align: center;"><pre><code>&gt;path_info /foo/bar\baa.txt

composed path:
  cout &lt;&lt; -------------: /foo/bar/baa.txt
  preferred()----------: \foo\bar\baa.txt
...
observers, native format:
  native()-------------: /foo/bar\baa.txt
  c_str()--------------: /foo/bar\baa.txt
  string()-------------: /foo/bar\baa.txt
  wstring()------------: /foo/bar\baa.txt

observers, generic format:
  generic_string()-----: /foo/bar/baa.txt
  generic_wstring()----: /foo/bar/baa.txt</code></pre></td></tr></tbody></table>

Native format observers should be used when interacting with the operating system or with users; that’s what they expect.

Generic format observers should be used when the results need to be portable and uniform regardless of the operating system.

`path` objects always hold pathnames in the native format, but otherwise leave them unchanged from their source. The [preferred()](reference.html#preferred) function will convert to the preferred form, if the native format has several forms. Thus on Windows, it will convert slashes to backslashes.

Let’s move on to decomposition and query functions:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./path_info /foo/bar/baa.txt
...
decomposition:
  root_name()----------:
  root_directory()-----: /
  root_path()----------: /
  relative_path()------: foo/bar/baa.txt
  parent_path()--------: /foo/bar
  filename()-----------: baa.txt
  stem()---------------: baa
  extension()----------: .txt

query:
  empty()--------------: false
  is_absolute()--------: true
  has_root_name()------: false
  has_root_directory()-: true
  has_root_path()------: true
  has_relative_path()--: true
  has_parent_path()----: true
  has_filename()-------: true
  has_stem()-----------: true
  has_extension()------: true</code></pre></td><td style="text-align: center;"><pre><code>&gt;path_info /foo/bar/baa.txt
...
decomposition:
  root_name()----------:
  root_directory()-----: /
  root_path()----------: /
  relative_path()------: foo/bar/baa.txt
  parent_path()--------: /foo/bar
  filename()-----------: baa.txt
  stem()---------------: baa
  extension()----------: .txt

query:
  empty()--------------: false
  is_absolute()--------: false
  has_root_name()------: false
  has_root_directory()-: true
  has_root_path()------: true
  has_relative_path()--: true
  has_parent_path()----: true
  has_filename()-------: true
  has_stem()-----------: true
  has_extension()------: true</code></pre></td></tr></tbody></table>

These are pretty self-evident, but do note the difference in the result of `is_absolute()` between Linux and Windows. Because there is no root name (i.e. drive specifier or network name), a lone slash (or backslash) is a relative path on Windows.

On to composition!

Class `path` uses `/` and `/=` operators to append elements. That’s a reminder that these operations append the operating system’s preferred directory separator if needed. The preferred directory separator is a slash on POSIX-like systems, and a backslash on Windows-like systems.

[`path_info.cpp`](../example/path_info.cpp) composes a path by appending each of the command line elements to an initially empty path:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><blockquote><pre><code>path p;  // compose a path from the command line arguments

for (; argc &gt; 1; --argc, ++argv)
  p /= argv[1];

cout &lt;&lt; &quot;\ncomposed path:\n&quot;;
cout &lt;&lt; &quot; cout &lt;&lt; -------------: &quot; &lt;&lt; p &lt;&lt; &quot;\n&quot;;
cout &lt;&lt; &quot; preferred()----------: &quot; &lt;&lt; p.preferred() &lt;&lt; &quot;\n&quot;;</code></pre></blockquote></td></tr></tbody></table>

Let’s give this code a try:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Ubuntu Linux</strong></em></td><td style="text-align: center;"><em><strong>Microsoft Windows</strong></em></td></tr><tr class="even"><td style="text-align: center;"><pre><code>$ ./path_info / foo/bar baa.txt

composed path:
  cout &lt;&lt; -------------: /foo/bar/baa.txt
  preferred()----------: /foo/bar/baa.txt</code></pre></td><td style="text-align: center;"><pre><code>&gt;path_info / foo/bar baa.txt

composed path:
  cout &lt;&lt; -------------: /foo/bar\baa.txt
  preferred()----------: \foo\bar\baa.txt</code></pre></td></tr></tbody></table>

 

------------------------------------------------------------------------

<span id="Error-reporting">Error reporting</span>
-------------------------------------------------

The Boost.Filesystem `file_size` function has two overloads:

>     uintmax_t file_size(const path& p);
>     uintmax_t file_size(const path& p, system::error_code& ec);

The only significant difference between the two is how they report errors.

The first signature will throw exceptions to report errors. A `filesystem_error` exception will be thrown on an operational error. `filesystem_error` is derived from `std::runtime_error`. It has a member function to obtain the `error_code` reported by the source of the error. It also has member functions to obtain the path or paths that caused the error.

> **Motivation for the second signature:** Throwing exceptions on errors was the entire error reporting story for the earliest versions of Boost.Filesystem, and indeed throwing exceptions on errors works very well for many applications. But user reports trickled in that some code became so littered with try and catch blocks as to be unreadable and unmaintainable. In some applications I/O errors aren’t exceptional, and that’s the use case for the second signature.

Functions with a `system::error_code&` argument set that argument to report operational error status, and so do not throw exceptions when I/O related errors occur. For a full explanation, see [Error reporting](reference.html#Error-reporting) in the reference documentation.

------------------------------------------------------------------------

� Copyright Beman Dawes 2010

Distributed under the Boost Software License, Version 1.0. See [www.boost.org/LICENSE\_1\_0.txt](http://www.boost.org/LICENSE_1_0.txt)

Revised 20 March 2012
