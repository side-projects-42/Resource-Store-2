class AddPaidAddonToPerk < ActiveRecord::Migration[5.2]
  def change
    add_column :perks, :paid_addon, :boolean, default: false
  end
end
