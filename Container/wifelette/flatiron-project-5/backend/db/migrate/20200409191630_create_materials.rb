class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :name
      t.string :source
      t.belongs_to :activity

      t.timestamps
    end
  end
end
