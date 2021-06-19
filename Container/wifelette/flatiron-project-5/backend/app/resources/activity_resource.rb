class ActivityResource < ApplicationResource
  # Add an "attribute" for each field on the Activity that we want access to via the API
  attribute :name, :string
  attribute :category, :string

  # Adding a has_many makes the nested relationship available to the API
  many_to_many :materials
  many_to_many :days

  # Previously my sort was case-sensitive, so this makes it not:
  sort :name do |scope, direction|
    scope.order("LOWER(name)", direction)
  end
end