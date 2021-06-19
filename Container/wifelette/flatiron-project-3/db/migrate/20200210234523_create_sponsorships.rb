class CreateSponsorships < ActiveRecord::Migration[5.2]
  def change
    create_table :sponsorships do |t|
      t.references :company, foreign_key: true
      t.references :package, foreign_key: true

      t.timestamps
    end
  end
end
