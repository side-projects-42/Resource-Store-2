class Event < ApplicationRecord
  has_many :packages, dependent: :destroy
  scope :not_yet_happened, -> { where("start_date > ?", Time.now) } 
  
  validates :name, uniqueness: true, presence: true

  # This is effectively the same thing as the Scope bit above, I just wanted to practice both ways.
  def self.already_happened
    # At first I had `Event.where`, but I don't need it because self inside of a class is itself, so I removed it.
    where("start_date < ?", Time.now)
  end

  # def self.not_yet_happened
  #   Event.where("start_date > ?", Time.now)
  # end
end
