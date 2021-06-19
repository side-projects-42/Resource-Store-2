class AddPriorTalkExperienceToProposals < ActiveRecord::Migration
  def change
    add_column :proposals, :prior_experience, :text
  end
end
