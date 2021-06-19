class Post < ActiveRecord::Base
  include ActiveModel::Validations
  validates_with ClickbaitValidator

  validates :title, presence: true
  validates :content, length: { minimum: 250 }
  validates :summary, length: { maximum: 250 }
  validates :category, inclusion: { in: %w[Fiction Non-Fiction] }
end
