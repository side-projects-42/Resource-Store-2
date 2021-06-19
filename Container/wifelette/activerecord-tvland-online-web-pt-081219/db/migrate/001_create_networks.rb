class CreateNetworks < ActiveRecord::Migration[5.1]
  def change
    create_table :networks do |t|
      t.string :call_letters
      t.integer :channel
    end
  end
end
