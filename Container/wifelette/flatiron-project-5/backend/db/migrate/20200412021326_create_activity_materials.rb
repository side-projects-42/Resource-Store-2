class CreateActivityMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :activity_materials do |t|
      t.belongs_to :activity
      t.belongs_to :material

      t.timestamps
    end
  end
end
