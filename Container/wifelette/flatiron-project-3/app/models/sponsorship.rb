class Sponsorship < ApplicationRecord
  belongs_to :company
  belongs_to :package
end
