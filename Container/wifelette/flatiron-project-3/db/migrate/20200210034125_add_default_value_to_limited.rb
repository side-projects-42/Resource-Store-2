class AddDefaultValueToLimited < ActiveRecord::Migration[5.2]
  def up
    change_column_default :perks, :limited, false
  end
  
  def down
    change_column_default :perks, :limited, false
  end
end
