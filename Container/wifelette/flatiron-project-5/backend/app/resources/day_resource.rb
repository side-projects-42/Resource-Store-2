class DayResource < ApplicationResource
  # I happen to have named it :date, but this isn't a typo. One is the name of the field, the other is the type.
  attribute :date, :date
  # When you add a relationship to a resource, it doesn't auto-include it. It just makes it available to be included. 
  many_to_many :activities
end