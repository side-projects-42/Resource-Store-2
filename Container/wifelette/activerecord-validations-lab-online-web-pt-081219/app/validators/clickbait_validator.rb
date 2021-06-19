class ClickbaitValidator < ActiveModel::Validator
  BAIT = [/Won't Believe/, /Secret/, /Guess/, /Top \d+/]
  
  def validate(record)
    record.errors[:title] << "Moar Clickbait!" unless BAIT.any? { |b| record.title =~ b }
  end
end