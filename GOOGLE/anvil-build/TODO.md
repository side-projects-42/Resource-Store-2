foo\#*.ext for src\_filter on input side removes extra intermediate rules (*.css only from set)

Caching
=======

copy\_files/etc need to preserve times

Stages
======

Commands emit a list of stages. Each stage is executed in order and only if the previous stage was skipped/succeeded.

StageManager: log\_sinks log stages execute()

Stage: name log execute()

Simple commands can setup a single StageManager with stages and execute. The daemon would setup a new StageManager each time it goes to perform its work.

StageManagers setup LogSinks as needed (ConsoleLogSink, RemoteLogSink, FileLogSink) and wire up all the loggers.

Stages are logical subcommands, such as ‘build’, ‘test’, ‘deploy’, ‘clean’, etc. A ‘rebuild’ command may consist of ‘clean’ and ‘build’, where a ‘test’ command would have ‘build’ and ‘test’.

Logging
=======

LogSource
---------

Builds a line list of output from a single rule. Pickleable to allow for passing across processes.

-   Name
-   Parent / children
-   Sinks
-   Default verbosity level (inherit/+/-)
-   Methods for debug/info/warn/error
-   Status: waiting|running|succeeded|failed|skipped
-   Exception
-   start\_time / end\_time
-   work\_unit / work\_unit\_count for progress tracking

LogSink
-------

Receives change notifications for all logger objects. For every field updated on a LogSource, the LogSink will get notified that the change occurred.

-   source\_open(source)
-   source\_set\_status(source, value)
-   source\_set\_exeception(source, ex)
-   source\_append\_line(source, line)
-   source\_set\_time(source, start\_time, end\_time)
-   source\_set\_work\_unit(source, work\_unit, work\_unit\_count)
-   source\_close(source)

Example sinks:

-   ConsoleLogSink: log to an interactive console
-   FileLogSink: log simple output to a file/pipe
-   RemoteLogSink: post to a log server

Flow
----

One ScopedLogger for the entire command, one for each stage (build/test/etc), and one for each rule.

Log Server
==========

Starts a streaming log server that can be viewed in the browser to watch build status/test reports, as well as providing an API for build sessions to post data with.

anvil log\_server –http\_port=8000

-   / : index
    -   Report history
    -   Live-updating ‘in-progress’ list
    -   Basic machine stats (CPU %, etc)
-   GET /report/N/ : report view
    -   Info: build config/command line/etc
    -   Timing information for whole report
    -   Graph w/ timing for each node
        -   State (success, fail, running, skipped)
        -   Time elapsed
        -   Click to show output
    -   Console log (all output)
    -   Test results
        -   Take output from Buster/etc?
-   POST /report/ : create report
-   POST /report/N/ : update report

POST blobs
----------

Creation: ’’’ { ‘host’: { ‘name’: ‘some-machine’, ‘platform’: ‘windows’, ‘processors’: 9, … }, ‘working\_dir’: ‘/some/path/’, ‘command\_line’: ‘anvil build –foo …’, ‘command’: ‘build’, ‘stages’: \[‘build’, ‘test’, ‘deploy’\], ‘configuration’: ‘…’, ‘targets’: \[‘:c’\], ‘graph’: { ‘nodes’: \[ { ‘name’: ‘:a’, ‘path’: ‘/some/path:a’, … }\], ‘edges’: \[\[‘:a’, ‘:b’\], \[‘:b’, ‘:c’\]\] }, } ’’’

Update: ’’’ scoped logger blob: // any fields can be omitted to not update that field // output is always appended if present ‘status’: ‘waiting|running|succeeded|failed|skipped’, ‘start\_time’: 0, ‘end\_time’: 0, ‘exception’: undefined, ‘output’: ‘new output’, ‘work\_unit\_count’: 100, ‘work\_unit’: 28,

{ {scoped logger blob},

‘children’: { ‘build’: { {scoped logger blob}, ‘children’: { ‘/some/path:a’: { {scoped logger blob}, ‘src\_paths’: \[‘a’, ‘b’\], ‘all\_output\_files’: \[‘ax’, ‘bx’\] } } }, ‘test’: { {scoped logger blob}, // something } } } ’’’

Serving/Daemon
==============

anvilrc
=======

Universal arg: ‘–anvil\_config=…’ If not specified, search up cwd path until .anvilrc or .git/ found

Format
------

\[core\] jobs=2 \[commands\] search\_paths= some/path/ \[rules\] search\_paths= some/path/ \[serving\] http\_port=8080 daemon\_port=8081 [logging](#logging) http\_port=8000 …
