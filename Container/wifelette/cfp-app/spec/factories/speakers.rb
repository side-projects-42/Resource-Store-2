FactoryGirl.define do
  factory :speaker do
    person
    bio 'Factory bio'
    headshot_url "my-headshot-url.png"
    location "Portland, OR"
    github "test-user-github"
  end
end
