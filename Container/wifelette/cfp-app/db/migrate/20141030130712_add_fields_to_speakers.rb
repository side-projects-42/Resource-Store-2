class AddFieldsToSpeakers < ActiveRecord::Migration
  def change
    add_column :speakers, :website, :string
    add_column :speakers, :github, :string
    add_column :speakers, :twitter, :string
    add_column :speakers, :speaking_experience, :string
    add_column :speakers, :headshot_url, :string
    add_column :speakers, :location, :string
  end
end
