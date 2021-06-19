require "httparty"
# This next bit is for formatting the Created date to something human-helpful. Date comes with Ruby, and Twitter.cldr uses it.
require "date"

module Candidates
  class Candidate
    def self.fetch(username)
      # Everything worked before I added this `fetch` method, but I literally did it to tick off the self + class/instance-method check boxes :p 
      response = HTTParty.get("https://api.github.com/users/#{username}")

      # This next line helps me figure out when I've been rate limited
      unless response.code == 200
        raise MissingUserError, username
      end

      user_data = response.parsed_response

      new(user_data)
    end
    
    attr_accessor :username, :real_name, :location, :email, :company, :bio, :hireable, :created, :repos, :followers

    def initialize(user_data)
      @username = user_data["login"]
      @real_name = user_data["name"]
      @location = user_data["location"]
      @email = user_data["email"]
      @company = user_data["company"]
      @bio = user_data["bio"]
      @hireable = user_data["hireable"]
      @created = DateTime.parse(user_data["created_at"])
      @repos = user_data["public_repos"]
      @followers = user_data["followers"]
    end

    def orgs_call
      # `||= ` means that the first time I make the HTTP request, I can keep reusing it
      @orgs_call ||= HTTParty.get("https://api.github.com/users/#{username}/orgs").parsed_response
    end

    def org_names
      orgs_call.map.with_index do |org_hash, i|
        "#{i + 1}. #{org_hash['login']}"
      end
    end

    def languages
      # First I'm fetching the Hash of all the repos belonging to the user
      lang_call ||= HTTParty.get("https://api.github.com/users/#{username}/repos").parsed_response

      # Then I'm creating a new Hash, that defaults to the number 0
      languages = {}

      repos = lang_call.size

      # Then I'm iterating over the Hash of all the repos
      lang_call.each do |repo|
        # Then I'm pulling the Language (singular) from each Repo
        language = repo['language']

        # If the repo doesn't have one listed, it'll return nil, and we don't want to do anything
        language = "Not Listed" if language.nil?

        # If the repo does have one listed, we'll add 1 to the tally for that language
        languages[language] ||= { qty: 0, percent: 0 }
        languages[language][:qty] += 1
        languages[language][:percent] = (languages[language][:qty].to_f / repos).round(2)
      end

      # Lastly we're returning a hash that has a list of how many repos of each language belong to the user
      languages
    end
  end
end