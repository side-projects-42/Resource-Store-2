class CreateSpecs < ActiveRecord::Migration[5.2]
  def change
    create_table :specs do |t|
      t.integer :qty
      t.references :package, foreign_key: true
      t.references :perk, foreign_key: true

      t.timestamps
    end
  end
end
