class Speaker < ActiveRecord::Base
  belongs_to :proposal
  belongs_to :person


  has_many :proposals, through: :person

  delegate :name, :email, :gravatar_hash, to: :person

  validates :bio, presence: true, length: { maximum: 500 }
  validates :headshot_url, length: { minimum: 10}
  validates :location, :github, presence: true
end

# == Schema Information
#
# Table name: speakers
#
#  id                  :integer          not null, primary key
#  proposal_id         :integer
#  person_id           :integer
#  bio                 :text
#  created_at          :datetime
#  updated_at          :datetime
#  website             :string(255)
#  github              :string(255)
#  twitter             :string(255)
#  speaking_experience :string(255)
#  headshot_url        :string(255)
#  location            :string(255)
#
# Indexes
#
#  index_speakers_on_person_id    (person_id)
#  index_speakers_on_proposal_id  (proposal_id)
#
