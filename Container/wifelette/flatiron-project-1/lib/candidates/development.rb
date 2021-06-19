require "webmock"

module Candidates
  module Development
    extend WebMock::API

    wifelette_body =
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

    wifelette_orgs =
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

    wycats_body = 
      <<~WYCATS
        {
          "login": "wycats",
          "id": 4,
          "node_id": "MDQ6VXNlcjQ=",
          "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/wycats",
          "html_url": "https://github.com/wycats",
          "followers_url": "https://api.github.com/users/wycats/followers",
          "following_url": "https://api.github.com/users/wycats/following{/other_user}",
          "gists_url": "https://api.github.com/users/wycats/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/wycats/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/wycats/subscriptions",
          "organizations_url": "https://api.github.com/users/wycats/orgs",
          "repos_url": "https://api.github.com/users/wycats/repos",
          "events_url": "https://api.github.com/users/wycats/events{/privacy}",
          "received_events_url": "https://api.github.com/users/wycats/received_events",
          "type": "User",
          "site_admin": false,
          "name": "Yehuda Katz",
          "company": "Tilde, Inc.",
          "blog": "http://yehudakatz.com",
          "location": "San Francisco",
          "email": null,
          "hireable": true,
          "bio": null,
          "public_repos": 220,
          "public_gists": 751,
          "followers": 9379,
          "following": 4,
          "created_at": "2008-01-12T05:38:33Z",
          "updated_at": "2019-10-04T17:16:23Z"
        }
      WYCATS

      wycats_orgs = 
        <<~WYCATSORGS
        [
          {
            "login": "rails",
            "id": 4223,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjQyMjM=",
            "url": "https://api.github.com/orgs/rails",
            "repos_url": "https://api.github.com/orgs/rails/repos",
            "events_url": "https://api.github.com/orgs/rails/events",
            "hooks_url": "https://api.github.com/orgs/rails/hooks",
            "issues_url": "https://api.github.com/orgs/rails/issues",
            "members_url": "https://api.github.com/orgs/rails/members{/member}",
            "public_members_url": "https://api.github.com/orgs/rails/public_members{/member}",
            "avatar_url": "https://avatars1.githubusercontent.com/u/4223?v=4",
            "description": ""
          },
          {
            "login": "jquery",
            "id": 70142,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjcwMTQy",
            "url": "https://api.github.com/orgs/jquery",
            "repos_url": "https://api.github.com/orgs/jquery/repos",
            "events_url": "https://api.github.com/orgs/jquery/events",
            "hooks_url": "https://api.github.com/orgs/jquery/hooks",
            "issues_url": "https://api.github.com/orgs/jquery/issues",
            "members_url": "https://api.github.com/orgs/jquery/members{/member}",
            "public_members_url": "https://api.github.com/orgs/jquery/public_members{/member}",
            "avatar_url": "https://avatars1.githubusercontent.com/u/70142?v=4",
            "description": ""
          },
          {
            "login": "carlhuda",
            "id": 76794,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjc2Nzk0",
            "url": "https://api.github.com/orgs/carlhuda",
            "repos_url": "https://api.github.com/orgs/carlhuda/repos",
            "events_url": "https://api.github.com/orgs/carlhuda/events",
            "hooks_url": "https://api.github.com/orgs/carlhuda/hooks",
            "issues_url": "https://api.github.com/orgs/carlhuda/issues",
            "members_url": "https://api.github.com/orgs/carlhuda/members{/member}",
            "public_members_url": "https://api.github.com/orgs/carlhuda/public_members{/member}",
            "avatar_url": "https://avatars2.githubusercontent.com/u/76794?v=4",
            "description": null
          },
          {
            "login": "rubinius",
            "id": 317747,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjMxNzc0Nw==",
            "url": "https://api.github.com/orgs/rubinius",
            "repos_url": "https://api.github.com/orgs/rubinius/repos",
            "events_url": "https://api.github.com/orgs/rubinius/events",
            "hooks_url": "https://api.github.com/orgs/rubinius/hooks",
            "issues_url": "https://api.github.com/orgs/rubinius/issues",
            "members_url": "https://api.github.com/orgs/rubinius/members{/member}",
            "public_members_url": "https://api.github.com/orgs/rubinius/public_members{/member}",
            "avatar_url": "https://avatars2.githubusercontent.com/u/317747?v=4",
            "description": ""
          },
          {
            "login": "guard",
            "id": 351846,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjM1MTg0Ng==",
            "url": "https://api.github.com/orgs/guard",
            "repos_url": "https://api.github.com/orgs/guard/repos",
            "events_url": "https://api.github.com/orgs/guard/events",
            "hooks_url": "https://api.github.com/orgs/guard/hooks",
            "issues_url": "https://api.github.com/orgs/guard/issues",
            "members_url": "https://api.github.com/orgs/guard/members{/member}",
            "public_members_url": "https://api.github.com/orgs/guard/public_members{/member}",
            "avatar_url": "https://avatars0.githubusercontent.com/u/351846?v=4",
            "description": ""
          },
          {
            "login": "getbpm",
            "id": 890084,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjg5MDA4NA==",
            "url": "https://api.github.com/orgs/getbpm",
            "repos_url": "https://api.github.com/orgs/getbpm/repos",
            "events_url": "https://api.github.com/orgs/getbpm/events",
            "hooks_url": "https://api.github.com/orgs/getbpm/hooks",
            "issues_url": "https://api.github.com/orgs/getbpm/issues",
            "members_url": "https://api.github.com/orgs/getbpm/members{/member}",
            "public_members_url": "https://api.github.com/orgs/getbpm/public_members{/member}",
            "avatar_url": "https://avatars1.githubusercontent.com/u/890084?v=4",
            "description": null
          },
          {
            "login": "bpm",
            "id": 962145,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjk2MjE0NQ==",
            "url": "https://api.github.com/orgs/bpm",
            "repos_url": "https://api.github.com/orgs/bpm/repos",
            "events_url": "https://api.github.com/orgs/bpm/events",
            "hooks_url": "https://api.github.com/orgs/bpm/hooks",
            "issues_url": "https://api.github.com/orgs/bpm/issues",
            "members_url": "https://api.github.com/orgs/bpm/members{/member}",
            "public_members_url": "https://api.github.com/orgs/bpm/public_members{/member}",
            "avatar_url": "https://avatars0.githubusercontent.com/u/962145?v=4",
            "description": null
          },
          {
            "login": "emberjs",
            "id": 1253363,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNTMzNjM=",
            "url": "https://api.github.com/orgs/emberjs",
            "repos_url": "https://api.github.com/orgs/emberjs/repos",
            "events_url": "https://api.github.com/orgs/emberjs/events",
            "hooks_url": "https://api.github.com/orgs/emberjs/hooks",
            "issues_url": "https://api.github.com/orgs/emberjs/issues",
            "members_url": "https://api.github.com/orgs/emberjs/members{/member}",
            "public_members_url": "https://api.github.com/orgs/emberjs/public_members{/member}",
            "avatar_url": "https://avatars2.githubusercontent.com/u/1253363?v=4",
            "description": null
          },
          {
            "login": "emberjs-addons",
            "id": 1253532,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNTM1MzI=",
            "url": "https://api.github.com/orgs/emberjs-addons",
            "repos_url": "https://api.github.com/orgs/emberjs-addons/repos",
            "events_url": "https://api.github.com/orgs/emberjs-addons/events",
            "hooks_url": "https://api.github.com/orgs/emberjs-addons/hooks",
            "issues_url": "https://api.github.com/orgs/emberjs-addons/issues",
            "members_url": "https://api.github.com/orgs/emberjs-addons/members{/member}",
            "public_members_url": "https://api.github.com/orgs/emberjs-addons/public_members{/member}",
            "avatar_url": "https://avatars3.githubusercontent.com/u/1253532?v=4",
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
            "login": "tokaido",
            "id": 1637818,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2Mzc4MTg=",
            "url": "https://api.github.com/orgs/tokaido",
            "repos_url": "https://api.github.com/orgs/tokaido/repos",
            "events_url": "https://api.github.com/orgs/tokaido/events",
            "hooks_url": "https://api.github.com/orgs/tokaido/hooks",
            "issues_url": "https://api.github.com/orgs/tokaido/issues",
            "members_url": "https://api.github.com/orgs/tokaido/members{/member}",
            "public_members_url": "https://api.github.com/orgs/tokaido/public_members{/member}",
            "avatar_url": "https://avatars3.githubusercontent.com/u/1637818?v=4",
            "description": null
          },
          {
            "login": "erikhuda",
            "id": 1709497,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjE3MDk0OTc=",
            "url": "https://api.github.com/orgs/erikhuda",
            "repos_url": "https://api.github.com/orgs/erikhuda/repos",
            "events_url": "https://api.github.com/orgs/erikhuda/events",
            "hooks_url": "https://api.github.com/orgs/erikhuda/hooks",
            "issues_url": "https://api.github.com/orgs/erikhuda/issues",
            "members_url": "https://api.github.com/orgs/erikhuda/members{/member}",
            "public_members_url": "https://api.github.com/orgs/erikhuda/public_members{/member}",
            "avatar_url": "https://avatars2.githubusercontent.com/u/1709497?v=4",
            "description": null
          },
          {
            "login": "components",
            "id": 2160696,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjIxNjA2OTY=",
            "url": "https://api.github.com/orgs/components",
            "repos_url": "https://api.github.com/orgs/components/repos",
            "events_url": "https://api.github.com/orgs/components/events",
            "hooks_url": "https://api.github.com/orgs/components/hooks",
            "issues_url": "https://api.github.com/orgs/components/issues",
            "members_url": "https://api.github.com/orgs/components/members{/member}",
            "public_members_url": "https://api.github.com/orgs/components/public_members{/member}",
            "avatar_url": "https://avatars0.githubusercontent.com/u/2160696?v=4",
            "description": null
          },
          {
            "login": "w3ctag",
            "id": 3874462,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjM4NzQ0NjI=",
            "url": "https://api.github.com/orgs/w3ctag",
            "repos_url": "https://api.github.com/orgs/w3ctag/repos",
            "events_url": "https://api.github.com/orgs/w3ctag/events",
            "hooks_url": "https://api.github.com/orgs/w3ctag/hooks",
            "issues_url": "https://api.github.com/orgs/w3ctag/issues",
            "members_url": "https://api.github.com/orgs/w3ctag/members{/member}",
            "public_members_url": "https://api.github.com/orgs/w3ctag/public_members{/member}",
            "avatar_url": "https://avatars3.githubusercontent.com/u/3874462?v=4",
            "description": ""
          },
          {
            "login": "yarnpkg",
            "id": 22247014,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyMjQ3MDE0",
            "url": "https://api.github.com/orgs/yarnpkg",
            "repos_url": "https://api.github.com/orgs/yarnpkg/repos",
            "events_url": "https://api.github.com/orgs/yarnpkg/events",
            "hooks_url": "https://api.github.com/orgs/yarnpkg/hooks",
            "issues_url": "https://api.github.com/orgs/yarnpkg/issues",
            "members_url": "https://api.github.com/orgs/yarnpkg/members{/member}",
            "public_members_url": "https://api.github.com/orgs/yarnpkg/public_members{/member}",
            "avatar_url": "https://avatars3.githubusercontent.com/u/22247014?v=4",
            "description": "Fast, reliable, and secure dependency management for JavaScript."
          }
        ]
        WYCATSORGS

    WebMock.enable!

    stub_request(:get, %r{https://api.github.com/.*})
    .to_return(status: 404, body: %q|{"message":"Not Found","documentation_url":"https://developer.github.com/v3/users/#get-a-single-user"}|, headers: { "Content-Type": "application/json" })

    stub_request(:get, "https://api.github.com/users/wifelette")
      .to_return(status: 200, body: wifelette_body, headers: { "Content-Type": "application/json" })

    stub_request(:get, "https://api.github.com/users/wifelette/orgs")
      .to_return(status: 200, body: wifelette_orgs, headers: { "Content-Type": "application/json" }) 
      
    stub_request(:get, "https://api.github.com/users/wycats")
      .to_return(status: 200, body: wycats_body, headers: { "Content-Type": "application/json" })

    stub_request(:get, "https://api.github.com/users/wycats/orgs")
      .to_return(status: 200, body: wycats_orgs, headers: { "Content-Type": "application/json" }) 
    


  end
end