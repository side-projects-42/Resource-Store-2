\[**Editor’s Note:** _For the past few weeks Jenkins community member [Charles Lowell](http://twitter.com/cowboyd) has been working with [Kohsuke](http://twitter.com/kohsukekawa) on adding support for building plugins in Ruby. As part of this effort, [Charles](http://twitter.com/cowboyd) has been hosting weekly hack sessions via WebEx_\]

As always, last night’s Ruby Plugins hack session was a pleasure. Below is a quick notation of what items were discussed and/or accomplished followed by next steps to be taken my those in attendance.

## Discussion/Accomplished

- Ruby Plugin project structure and how to bundle into an .hpi file.
- Review of the new XSTREAM serialization method
- API for marking fields as transient
- What mods, if any, are required to get .hpl to work with Ruby plugin

## Next Steps

### Charles

- to research what can be shared between JRuby `ScriptingContainer`s
- API for unmarshaling hooks on serialized ruby objects
- Change the name of the repo :)
- Document… something!

### Kohsuke

- test more view functions
- add debug mode outside of hpi:run
