class MaterialResource < ApplicationResource
  attribute :name, :string
  attribute :source, :string
  many_to_many :activities

  sort :name do |query, direction|
    query.order("LOWER(name)", direction)
  end
  
end