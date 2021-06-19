# Tools

Explanations of some of the tools and gems I'm using along the way, both for reference along the way, and as docs to remind me later.

## Thor

http://whatisthor.com/

Normally, if your project needed a Gem, you would simply include it in your gemfile, and require it in your application. But in this case we're writing a _gem_, not an application, so instead we need to add the dependency to our _gemspec_:

`spec.add_runtime_dependency "thor", "~> 0.20.3"`

Thor is a useful base class for our CLI, so we'll start by subclassing from it in our `Cli` class (inside the Candidates Module).

The next step to make Thor work, is that we need to tell our executable file (inside the `exe` directory) to start it:

`Candidates::Cli.start`

Once we've done that, we're able to run `bundle exec candidates` in our terminal while building the gem.

Thor helps create CLI tools. It effectively creates a Table of Contents of all available CLI functionality.

This is a demo of some of what Thor can do:

```ruby
class Cli < Thor
    desc "hello NAME", "prints hello world"
    option :loud, type: :boolean
    def hello(name)
      message = "hello #{name}"

      if options[:loud]
        puts message.upcase
      else
        puts message
      end
    end
  end
```

The Thor website somehow doesn't actually link to Github :p Planning to submit a PR for this later!

## HTTParty

https://github.com/jnunemaker/httparty

HTTParty is a gem that will pull in the data from HTTP APIs. You can use it similar to how you'd use Nokogiri for scraping. It just makes the HTTP request for you.

Here's an example of a use:

`HTTParty.get("https://api.github.com/users/wifelette").parsed_response`

If you called it without the `.parsed_response` it would give you a gem-specific version of the content called `HTTParty::Resonse`. That has a bunch of metadata in it as well, versus if you do `.parsed_response` you're just getting the actual primary data in a hash. So there are different use cases for each, but I mostly use `.parsed_response`.

Don't forget to once again add it to your gemspec:

`spec.add_runtime_dependency "httparty", "~> 0.17.1"`

...and to `require` it in your `CLI.rb`.

## Awesome Print

While testing, I added the Pretty Print requirement to my files to help me parse the data visually in temporary testing. After digging around a bit I chose to instead use `Awesome Print` which does the same thing but is a bit more feature rich.

`require "awesome_print"`

It also needs to go into the Gemspec:

`spec.add_runtime_dependency "awesome_print", "~> 1.8"`

Pretty much everything needs to go in the gemspec, and following a similar convention, so I'll stop explicitly mentioning that here now.

## Pastel

I just added this for fun color in my CLI messages :p It's gratuitous.

`spec.add_runtime_dependency "pastel", "~> 0.7.3"`
`require "pastel"`

To look up the available options: https://github.com/piotrmurach/pastel

It made the code kind'v hard to look at in some cases, since it caused things like nested interpolation, but the user output looks great. In some places I've extracted strings + pastel code into variables to keep the main code easier to read.

## Webmock

https://github.com/bblimke/webmock

Webmock is a gem I'm using to allow me to use stub data in my tests, instead of continuing to hammer the actual API every time. I added this after chatting with a classmate who was getting rate limited by her project website :p

Later, when I added the option to switch to a new candidate, I had to add a second set of stubbed data so I could use that feature with mocks.

Full disclosure: I got some help with this and don't entirely understand how it works.

By default, the `candidates` gem will use live data.

While developing, I'll run it using `CANDIDATES_DEV=1 ./bin/candidates wizard` to use the stub data instead of making live API calls.

## TTY Etc.

https://rubygems.org/gems/tty-prompt
https://github.com/piotrmurach/tty-prompt

TTY-prompt is a gem I layered over Thor to help with pretty looking interactions, like choices with lists, yes/no questions, etc.

Eventually I may strip out Thor all together since this gives me almost all of what I need, and makes it pleasant enough that the Thor `help` command isn't all that important anymore. But TBD, it also may be more work to remove it than to just leave it there.

TTY is part of a family of gems though, so once I added `tty-prompt` I ended up toying with a bunch of the others as well. Some I uninstalled after. `tty-prompt` and `tty-markdown` are the primary ones I'm using for now.

### TTY-Markdown

I wanted some bigger blocks of text in my CLI primary commands, and I also wanted them in color. They ultimately made my code VERY heavy/hard to read, so I extracted the large bits of text into separate Markdown files, and then used `tty-markdown` to import and parse them in the actual CLI.

I also overwrote the standard Markdown coloring scheme to accomplish my goals. For example, there's no markdown format for "make all my regular text look like this" so I overwrote the default stylesheet for how italics look, and then made everything italicized.

## ProgressBar

One of my API calls (`orgs_hashes`) could take a while to return data, since it could be _a lot_. My CLI explains this to the user ahead of time, but I still liked the notion of a visible progress bar.

It's up and running but I haven't yet dug in enough to make it especially useful. Right now it's running for an arbitrary amount of time, untethered from the actual API call. If I end up with more time I'll go back and finesse this (or possibly replace it with `tty-progressbar`).

**UPDATE**: Nixed this altogether, since I was making a silly mistake in my understanding of the API call situation :p It shouldn't actually be slow.

## Twitter CLDR

https://github.com/twitter/twitter-cldr-rb

I used this gem, in conjunction with built in Ruby functionality (`Date`) to prettify the github user's start date from `2008-09-19T21:40:19Z` to a human-readable `X months/years/etc ago`.

## RSpec

We haven't really covered testing in the curriculum yet, so I can't really write my own, but I'm working to better _understand_ them for now at least. A friend helped me write a few starting tests as a learning opportunity. I didn't want to get to distracted though, so once that session was over I didn't continue to write more. I hope to go back to them one day. Writing this gem definitely made me appreciate testing in general, since I could've run my test suite after each change instead of needing to restart my program and manually test all the options each time.
