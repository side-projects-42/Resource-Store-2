class Activity < ApplicationRecord
  has_many :schedule_items
  has_many :activity_materials
  has_many :materials, through: :activity_materials
  has_many :days, through: :schedule_items
end
