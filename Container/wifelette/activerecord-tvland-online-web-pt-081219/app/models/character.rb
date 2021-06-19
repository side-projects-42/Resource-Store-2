class Character < ActiveRecord::Base
  belongs_to :actor
  belongs_to :show

  def say_that_thing_you_say
    "Steve Urkel always says: #{self.catchphrase}"
  end
end