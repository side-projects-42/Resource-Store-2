class Day < ApplicationRecord
  has_many :schedule_items
  has_many :activities, through: :schedule_items
  has_many :materials, through: :schedule_items
end
