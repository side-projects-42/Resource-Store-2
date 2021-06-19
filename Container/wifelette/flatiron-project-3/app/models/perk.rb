class Perk < ApplicationRecord
  validates :name, presence: true

  has_many :specs, dependent: :destroy
  has_many :packages, through: :specs
end
