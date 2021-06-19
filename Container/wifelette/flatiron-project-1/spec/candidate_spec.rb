module Candidates
  RSpec.describe Candidate do
    let(:wifelette_body) do
      <<~WIFELETTE
        {
          "login": "wifelette",
          "id": 25433,
          "node_id": "MDQ6VXNlcjI1NDMz",
          "avatar_url": "https://avatars1.githubusercontent.com/u/25433?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/wifelette",
          "html_url": "https://github.com/wifelette",
          "followers_url": "https://api.github.com/users/wifelette/followers",
          "following_url": "https://api.github.com/users/wifelette/following{/other_user}",
          "gists_url": "https://api.github.com/users/wifelette/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/wifelette/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/wifelette/subscriptions",
          "organizations_url": "https://api.github.com/users/wifelette/orgs",
          "repos_url": "https://api.github.com/users/wifelette/repos",
          "events_url": "https://api.github.com/users/wifelette/events{/privacy}",
          "received_events_url": "https://api.github.com/users/wifelette/received_events",
          "type": "User",
          "site_admin": false,
          "name": "Leah Silber",
          "company": "@tildeio ",
          "blog": "",
          "location": "Portland, OR",
          "email": null,
          "hireable": null,
          "bio": "Co-founder and CEO at @tildeio, EmberConf and RailsConf Organizer, @emberjs Core Team Member, @jQuery Core Team alum, and all around technophile.",
          "public_repos": 163,
          "public_gists": 2,
          "followers": 363,
          "following": 2,
          "created_at": "2008-09-19T21:40:19Z",
          "updated_at": "2019-05-23T18:50:02Z"
        }
      WIFELETTE
    end

    let(:wifelette_orgs) do
      <<~WIFELETTE
      [
        {
          "login": "gogaruco",
          "id": 48422,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ4NDIy",
          "url": "https://api.github.com/orgs/gogaruco",
          "repos_url": "https://api.github.com/orgs/gogaruco/repos",
          "events_url": "https://api.github.com/orgs/gogaruco/events",
          "hooks_url": "https://api.github.com/orgs/gogaruco/hooks",
          "issues_url": "https://api.github.com/orgs/gogaruco/issues",
          "members_url": "https://api.github.com/orgs/gogaruco/members{/member}",
          "public_members_url": "https://api.github.com/orgs/gogaruco/public_members{/member}",
          "avatar_url": "https://avatars3.githubusercontent.com/u/48422?v=4",
          "description": null
        },
        {
          "login": "tildeio",
          "id": 1355851,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzNTU4NTE=",
          "url": "https://api.github.com/orgs/tildeio",
          "repos_url": "https://api.github.com/orgs/tildeio/repos",
          "events_url": "https://api.github.com/orgs/tildeio/events",
          "hooks_url": "https://api.github.com/orgs/tildeio/hooks",
          "issues_url": "https://api.github.com/orgs/tildeio/issues",
          "members_url": "https://api.github.com/orgs/tildeio/members{/member}",
          "public_members_url": "https://api.github.com/orgs/tildeio/public_members{/member}",
          "avatar_url": "https://avatars3.githubusercontent.com/u/1355851?v=4",
          "description": ""
        },
        {
          "login": "skylightio",
          "id": 4999088,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ5OTkwODg=",
          "url": "https://api.github.com/orgs/skylightio",
          "repos_url": "https://api.github.com/orgs/skylightio/repos",
          "events_url": "https://api.github.com/orgs/skylightio/events",
          "hooks_url": "https://api.github.com/orgs/skylightio/hooks",
          "issues_url": "https://api.github.com/orgs/skylightio/issues",
          "members_url": "https://api.github.com/orgs/skylightio/members{/member}",
          "public_members_url": "https://api.github.com/orgs/skylightio/public_members{/member}",
          "avatar_url": "https://avatars3.githubusercontent.com/u/4999088?v=4",
          "description": ""
        },
        {
          "login": "ember-learn",
          "id": 18540472,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjE4NTQwNDcy",
          "url": "https://api.github.com/orgs/ember-learn",
          "repos_url": "https://api.github.com/orgs/ember-learn/repos",
          "events_url": "https://api.github.com/orgs/ember-learn/events",
          "hooks_url": "https://api.github.com/orgs/ember-learn/hooks",
          "issues_url": "https://api.github.com/orgs/ember-learn/issues",
          "members_url": "https://api.github.com/orgs/ember-learn/members{/member}",
          "public_members_url": "https://api.github.com/orgs/ember-learn/public_members{/member}",
          "avatar_url": "https://avatars1.githubusercontent.com/u/18540472?v=4",
          "description": ""
        }
      ]
      WIFELETTE
    end

    before do
      stub_request(:get, "https://api.github.com/users/wifelette").
      to_return(:status => 200, :body => wifelette_body, :headers => { "Content-Type": "application/json" })

      stub_request(:get, "https://api.github.com/users/wifelette/orgs").
      to_return(:status => 200, :body => wifelette_orgs, :headers => { "Content-Type": "application/json" })      
    end

    it "can be initialized by passing in a username" do
      candidate = Candidate.new("wifelette")
      expect(candidate.username).to eq("wifelette")
      expect(candidate.pretty_name).to eq("Leah Silber")
      expect(candidate.location).to eq("Portland, OR")
    end

    it "can tell us how many orgs the candidate belongs to" do
      candidate = Candidate.new("wifelette")
      expect(candidate.org_count).to eq(4)
    end

  end
end