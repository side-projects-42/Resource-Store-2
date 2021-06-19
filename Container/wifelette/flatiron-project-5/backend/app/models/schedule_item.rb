class ScheduleItem < ApplicationRecord
  belongs_to :day
  belongs_to :activity
  has_many :materials, through: :activity
end
