require 'test_helper'
require 'digest/sha1'

class SitesTest < MiniTest::Unit::TestCase
  attr_reader :client
  attr_accessor :_assertions

  def setup
    @client = Netlify::Client.new(:client_id => "client_id", :client_secret => "client_secret")
    @client.access_token = "access_token"
    self._assertions = 0
  end

  def test_create_from_dir
    body = nil
    dir = ::File.expand_path("../files/site-dir", __FILE__)
    index_sha = Digest::SHA1.hexdigest(::File.read(::File.join(dir, "index.html")))

    stub_request(:post, "https://api.netlify.com/api/v1/sites")
      .to_return {|request|
        {
          :headers => {'Content-Type' => 'application/json'},
          :body => JSON.generate({:id => "1234"})
        }
      }
    stub_request(:post, "https://api.netlify.com/api/v1/sites/1234/deploys")
      .to_return {|request|
        body = JSON.parse(request.body)
        {
          :headers => {'Content-Type' => 'application/json'},
          :body => JSON.generate({:id => "2345", :state => "uploading", :required => [index_sha]})
        }
      }
    stub_request(:put, "https://api.netlify.com/api/v1/deploys/2345/files/index.html")
    stub_request(:get, "https://api.netlify.com/api/v1/deploys/2345")
      .to_return(:headers => {'Content-Type' => 'application/json'}, :body => {:id => "2345", :state => "processing"})

    site = client.sites.create(:dir => dir)

    assert_equal index_sha, body['files']['/index.html']

    assert_requested :put, "https://api.netlify.com/api/v1/deploys/2345/files/index.html",
      :body => ::File.read(::File.join(dir, "index.html")), :times => 1    # ===> Success
  end

  def test_create_from_zip
    stub_request(:post, "https://api.netlify.com/api/v1/sites")
      .to_return({
        :headers => {'Content-Type' => 'application/json'},
        :body => JSON.generate({:id => "1234"})
      })

    stub_request(:post, "https://api.netlify.com/api/v1/sites/1234/deploys")
    .to_return {|request|
      {
        :headers => {'Content-Type' => 'application/json'},
        :body => JSON.generate({:id => "2345", :state => "uploading", :required => []})
      }
    }
    zip = ::File.expand_path("../files/site-dir.zip", __FILE__)
    site = client.sites.create(:zip => zip)

    assert_requested :post, "https://api.netlify.com/api/v1/sites/1234/deploys",
      :body => ::File.read(zip), :times => 1
  end
end
