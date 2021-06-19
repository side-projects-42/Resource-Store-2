class AddLimitedToPerk < ActiveRecord::Migration[5.2]
  def change
    add_column :perks, :limited, :boolean
  end
end
