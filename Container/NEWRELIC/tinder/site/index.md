[<img src="http://opensoul.org/images/header_logo.gif" alt="Collective Idea" class="logo" width="17" height="22" />](http://collectiveidea.com)

- [Daniel](http://daniel.collectiveidea.com/blog)
- [Brandon](http://opensoul.org)
- [<img src="http://opensoul.org/images/header_collectiveidea.gif" alt="Collective Idea" width="123" height="21" />](http://collectiveidea.com)

# [Tinder](/)

Getting the campfire started

- [API Docs](tinder)
- [RubyForge](http://rubyforge.org/projects/tinder)
- [Blog](http://opensoul.org/tags/tinder)

Tinder is an API for interfacing with [Campfire](http://campfirenow.com), the 37Signals chat application.

## Example

    campfire = Tinder::Campfire.new 'mysubdomain'
    campfire.login 'myemail@example.com', 'mypassword'

### Create, find and destroy rooms

    room = campfire.create_room 'New Room', 'My new campfire room to test tinder'
    room = campfire.find_room_by_name 'Other Room'
    room.destroy

### Speak and Paste

    room.speak 'Hello world!'
    room.paste File.read("path/to/your/file.txt")

### Listening

    room.listen
    #=> [{:person=>"Brandon", :message=>"I'm getting very sleepy", :user_id=>"148583", :id=>"16434003"}]

    # or in block form
    room.listen do |m|
      room.speak 'Welcome!' if m[:message] == /hello/
    end

### Guest Access

    room.toggle_guest_access
    room.guest_url         #=> http://mysubdomain.campfirenow.com/11111
    room.guest_invite_code #=> 11111

### Change the name and topic

    room.name = 'Tinder Demo'
    room.topic = 'Showing how to change the room name and topic with tinder…'

### Users

    room.users
    campfire.users # users in all rooms

### Transcripts

    transcript = room.transcript(room.available_transcripts.first)
    #=> [{:message=>"foobar!", :user_id=>"99999", :person=>"Brandon", :id=>"18659245", :timestamp=>Tue May 05 07:15:00 -0700 2009}]

See the [API documentation](tinder) for more details.

## Installation

Tinder can be installed as a gem or a Rails plugin. Install the gem by executing:

    gem install tinder

Or, download it from [RubyForge](http://rubyforge.org/frs/?group_id=2922).

## Source

Contributions are welcome and appreciated! The source is available from:

    http://github.com/collectiveidea/tinder
