class CreateScheduleItems < ActiveRecord::Migration[5.2]
  def change
    create_table :schedule_items do |t|
      t.belongs_to :day
      t.belongs_to :activity

      t.timestamps
    end
  end
end
