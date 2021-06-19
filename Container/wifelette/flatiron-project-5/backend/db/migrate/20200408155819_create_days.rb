class CreateDays < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      # The null part makes it so I can't create an entry in the DB if it doesn't have an actual date in it
      t.datetime :date, null: false

      t.timestamps
    end
  end
end
