class AddNewTalkToProposals < ActiveRecord::Migration
  def change
    add_column :proposals, :new_talk, :boolean
  end
end
