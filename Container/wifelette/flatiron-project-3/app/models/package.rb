class Package < ApplicationRecord
  belongs_to :event
  # If you delete a Package, delete all the Specs tied to it as well:
  has_many :specs, dependent: :destroy
  has_many :perks, through: :specs

  validates :name, presence: true
  validates :price, numericality: { only_integer: true, allow_nil: true }

  # Since in the Controller we create empty records to render the form, this then rejects them if they don't end up used
  accepts_nested_attributes_for :specs, allow_destroy: true, reject_if: ->(attrs) { attrs["qty"] == "0" }
  # allow_destroy is what makes the `_destroy` in the Controller work
  # reject_if is what stops the empty {qty: 0} records from being saved
end
