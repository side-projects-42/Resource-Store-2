class CreatePerks < ActiveRecord::Migration[5.2]
  def change
    create_table :perks do |t|
      t.string :name
      t.string :description
      t.string :deliverable
      t.timestamps
    end
  end
end
