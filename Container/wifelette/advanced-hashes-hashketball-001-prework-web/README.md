Hashketball
===========

Objectives
----------

1.  Practice building nested hashes.
2.  Practice iterating over nested hashes.

Instructions
------------

Great news! You’re going to an NBA game! The only catch is that you’ve been volunteered to keep stats at the game.

Fork and clone this lab and run the test suite to get started. You’ll be coding your solution in `hashketball.rb`.

### Part 1: Building the Hash

The first method you will define is called `game_hash`. This method contains and returns a hash nested in the following manner:

-   The top level of the hash has two keys: `:home`, for the home team, and `:away`, for the away team.
-   The values of the `:home` and `:away` keys are hashes. These hashes have the following keys:
    -   `:team_name`
    -   `:colors`
    -   `:players`
-   The `:team_name` key points to a string of the team name.
-   The `:colors` key points to an array of strings that are that team’s colors.
-   The `:players` key points to an array of players. Each player (i.e. each index item of the array) is represented by a hash whose names (as strings) are the keys to a hash containing their stats. The values for each player’s names and their stats can be found in the table below. The stats keys should be formatted like this:
    -   `:player_name`
    -   `:number`
    -   `:shoe`
    -   `:num_points_scored`
    -   `:rebounds`
    -   `:assists`
    -   `:steals`
    -   `:blocks`
    -   `:slam_dunks`

Use the following data to populate your `game_hash` as outlined above. Remember to run `learn` to see what the tests expect.

Home Team:

-   team name: Brooklyn Nets
-   colors: Black, White
-   players:

<table><thead><tr class="header"><th style="text-align: center;">Stat</th><th style="text-align: center;">Info</th><th style="text-align: center;">Info</th><th style="text-align: center;">Info</th><th style="text-align: center;">Info</th><th style="text-align: center;">Info</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;"><strong>Player Name</strong></td><td style="text-align: center;">Alan Anderson</td><td style="text-align: center;">Reggie Evans</td><td style="text-align: center;">Brook Lopez</td><td style="text-align: center;">Mason Plumlee</td><td style="text-align: center;">Jason Terry</td></tr><tr class="even"><td style="text-align: center;"><strong>Number</strong></td><td style="text-align: center;">0</td><td style="text-align: center;">30</td><td style="text-align: center;">11</td><td style="text-align: center;">1</td><td style="text-align: center;">31</td></tr><tr class="odd"><td style="text-align: center;"><strong>Shoe</strong></td><td style="text-align: center;">16</td><td style="text-align: center;">14</td><td style="text-align: center;">17</td><td style="text-align: center;">19</td><td style="text-align: center;">15</td></tr><tr class="even"><td style="text-align: center;"><strong>Points</strong></td><td style="text-align: center;">22</td><td style="text-align: center;">12</td><td style="text-align: center;">17</td><td style="text-align: center;">26</td><td style="text-align: center;">19</td></tr><tr class="odd"><td style="text-align: center;"><strong>Rebounds</strong></td><td style="text-align: center;">12</td><td style="text-align: center;">12</td><td style="text-align: center;">19</td><td style="text-align: center;">12</td><td style="text-align: center;">2</td></tr><tr class="even"><td style="text-align: center;"><strong>Assists</strong></td><td style="text-align: center;">12</td><td style="text-align: center;">12</td><td style="text-align: center;">10</td><td style="text-align: center;">6</td><td style="text-align: center;">2</td></tr><tr class="odd"><td style="text-align: center;"><strong>Steals</strong></td><td style="text-align: center;">3</td><td style="text-align: center;">12</td><td style="text-align: center;">3</td><td style="text-align: center;">3</td><td style="text-align: center;">4</td></tr><tr class="even"><td style="text-align: center;"><strong>Blocks</strong></td><td style="text-align: center;">1</td><td style="text-align: center;">12</td><td style="text-align: center;">1</td><td style="text-align: center;">8</td><td style="text-align: center;">11</td></tr><tr class="odd"><td style="text-align: center;"><strong>Slam Dunks</strong></td><td style="text-align: center;">1</td><td style="text-align: center;">7</td><td style="text-align: center;">15</td><td style="text-align: center;">5</td><td style="text-align: center;">1</td></tr></tbody></table>

Away Team:

-   team name: Charlotte Hornets
-   colors: Turquoise, Purple
-   players:

<table style="width:97%;"><colgroup><col style="width: 19%" /><col style="width: 14%" /><col style="width: 18%" /><col style="width: 15%" /><col style="width: 12%" /><col style="width: 19%" /></colgroup><thead><tr class="header"><th style="text-align: center;">Stat</th><th style="text-align: center;">Info</th><th style="text-align: center;">Info</th><th style="text-align: center;">Info</th><th style="text-align: center;">Info</th><th style="text-align: center;">Info</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;"><strong>Player Name</strong></td><td style="text-align: center;">Jeff Adrien</td><td style="text-align: center;">Bismak Biyombo</td><td style="text-align: center;">DeSagna Diop</td><td style="text-align: center;">Ben Gordon</td><td style="text-align: center;">Brendan Haywood</td></tr><tr class="even"><td style="text-align: center;"><strong>Number</strong></td><td style="text-align: center;">4</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td><td style="text-align: center;">8</td><td style="text-align: center;">33</td></tr><tr class="odd"><td style="text-align: center;"><strong>Shoe</strong></td><td style="text-align: center;">18</td><td style="text-align: center;">16</td><td style="text-align: center;">14</td><td style="text-align: center;">15</td><td style="text-align: center;">15</td></tr><tr class="even"><td style="text-align: center;"><strong>Points</strong></td><td style="text-align: center;">10</td><td style="text-align: center;">12</td><td style="text-align: center;">24</td><td style="text-align: center;">33</td><td style="text-align: center;">6</td></tr><tr class="odd"><td style="text-align: center;"><strong>Rebounds</strong></td><td style="text-align: center;">1</td><td style="text-align: center;">4</td><td style="text-align: center;">12</td><td style="text-align: center;">3</td><td style="text-align: center;">12</td></tr><tr class="even"><td style="text-align: center;"><strong>Assists</strong></td><td style="text-align: center;">1</td><td style="text-align: center;">7</td><td style="text-align: center;">12</td><td style="text-align: center;">2</td><td style="text-align: center;">12</td></tr><tr class="odd"><td style="text-align: center;"><strong>Steals</strong></td><td style="text-align: center;">2</td><td style="text-align: center;">7</td><td style="text-align: center;">4</td><td style="text-align: center;">1</td><td style="text-align: center;">22</td></tr><tr class="even"><td style="text-align: center;"><strong>Blocks</strong></td><td style="text-align: center;">7</td><td style="text-align: center;">15</td><td style="text-align: center;">5</td><td style="text-align: center;">1</td><td style="text-align: center;">5</td></tr><tr class="odd"><td style="text-align: center;"><strong>Slam Dunks</strong></td><td style="text-align: center;">2</td><td style="text-align: center;">10</td><td style="text-align: center;">5</td><td style="text-align: center;">0</td><td style="text-align: center;">12</td></tr></tbody></table>

### Step 2: Building Methods

### Calling Methods within Methods

You’ll be building a series of methods that operate on the above game hash to return certain information about the teams and players. Each method will operate on the game hash by calling the `game_hash` method that returns the `game_hash`. In other words, since our `game_hash` method returns our hash, you can think of the `game_hash` like a variable that points to our hash and operate on it just as you would with hashes in previous lessons.

For example, let’s say we want to build a method, `home_team_name`, that returns the name of the home team, `"Brooklyn Nets"`. We can call the method `game_hash` inside of our `home_team_name` method and operate on the game\_hash:

    def home_team_name
      game_hash[:home][:team_name]
    end

    puts home_team_name
    # => "Brooklyn Nets"

Now that we understand how we are going to operate on the `game_hash` inside of the methods we’re building, let’s build those methods:

### Iterating through Nested Levels:

This lab requires us to iterate through the many levels of our nested hash. DON’T TAKE YOUR UNDERSTANDING OF YOUR HASH FOR GRANTED. Every time you iterate into a new level of the hash, immediately place a `binding.pry` there. Then, run RSpec with the `learn` command to see what the key/value pairs of that hash are.

Let’s take a look at an example:

    def good_practices
      game_hash.each do |location, team_data|
        #are you ABSOLUTELY SURE what 'location' and 'team data' are? use binding.pry to find out!
        binding.pry
          team_data.each do |attribute, data|
            #are you ABSOLUTELY SURE what 'attribute' and 'team data' are? use binding.pry to find out!
            binding.pry

            #what is 'data' at each loop through out .each block? when will the following line of code work and when will it break?
            data.each do |data_item|
                binding.pry
          end
        end
      end
    end

Open up the `hashketball.rb` file and copy and paste the above method. Then, beneath the `end` that closes the method definition, call the method (`good_practices`) and, in your terminal, run the file with `ruby hashketball.rb`. Play around with the methods in each binding until you get comfortable with the iteration. This should give you a stronger sense of how we iterate through so many levels of a nested hash and what happens on each level. **Use this method of placing LOTS of bindings when you iterate in order to solve this lab.**

Okay, *now* we’re ready to build out methods:

### Method Building

-   Build a method, `num_points_scored` that takes in an argument of a player’s name and returns the number of points scored for that player.

    -   Think about where in the hash you will find a player’s `:points`. How can you iterate down into that level? Think about the return value of your method. Remember that `.each` returns the original collection that you are iterating over. How can you return the number of points for a particular player?

-   Build a method, `shoe_size`, that takes in an argument of a player’s name and returns the shoe size for that player.
    -   Think about how you will find the shoe size of the correct player. How can you check and see if a player’s name matches the name that has been passed into the method as an argument?
-   Build a method, `team_colors`, that takes in an argument of the team name and returns an array of that teams colors.
-   Build a method, `team_names`, that operates on the game hash to return an array of the team names.
-   Build a method, `player_numbers`, that takes in an argument of a team name and returns an array of the jersey number’s for that team.
-   Build a method, `player_stats`, that takes in an argument of a player’s name and returns a hash of that player’s stats. The stat hash *should not include the player’s name*.

    -   Once you find the hash of stats for the correct player, think about how to remove a key/value pair from a hash. The `delete_if` enumerator might be a good place to start.
    -   Check out the following example of the expected return value of the `player_stats` method:

            player_stats("Alan Anderson")
            => { :number => 0,
                 :shoe => 16,
                 :points => 22,
                 :rebounds => 12,
                 :assists => 12,
                 :steals => 3,
                 :blocks => 1,
                 :slam_dunks => 1
               }

-   Build a method, `big_shoe_rebounds`, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
    -   First, find the player with the largest shoe size
    -   Then, return that player’s number of rebounds
    -   Remember to think about return values here. Use `binding.pry` to drop into your method and understand what it is returning and why.

**Bonus Questions:**

Define methods to return the answer to the following questions:

1.  Which player has the most points? Call the method `most_points_scored`.

2.  Which team has the most points? Call the method `winning_team`.

3.  Which player has the longest name? Call the method `player_with_longest_name`.

**Super Bonus:**

1.  Write a method that returns true if the player with the longest name had the most steals. Call the method `long_name_steals_a_ton?`.

Resources
---------

-   [Codecademy](http://www.codecademy.com/dashboard) - [A Night at the Movies](http://external.codecademy.com/courses/ruby-beginner-en-0i8v1/0/1)
