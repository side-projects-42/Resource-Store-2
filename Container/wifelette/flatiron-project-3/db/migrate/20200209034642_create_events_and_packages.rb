class CreateEventsAndPackages < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.string :location
      t.timestamps
    end
    
    create_table :packages do |t|
      t.string :name
      t.integer :price
      t.belongs_to :event
      t.timestamps
    end
  end
end
