class Spec < ApplicationRecord
  belongs_to :package
  belongs_to :perk

  validates :qty, numericality: { only_integer: true, allow_nil: true }
end
