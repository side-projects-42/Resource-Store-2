class Material < ApplicationRecord
  has_many :activity_materials
  has_many :activities, through: :activity_materials
end
