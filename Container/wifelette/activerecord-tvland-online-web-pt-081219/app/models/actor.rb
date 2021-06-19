class Actor < ActiveRecord::Base
  has_many :characters
  has_many :shows, through: :characters

  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def list_roles
    Actor.all.map do |a|
      a.characters.map do |c|
        "#{c.name} - #{c.show.name}"
      end
    end.flatten
  end
end