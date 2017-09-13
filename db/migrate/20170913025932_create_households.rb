class CreateHouseholds < ActiveRecord::Migration[5.1]
  def change
    create_table :households do |t|
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
