class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.string :type
      t.string :company
      t.string :company_address
      t.string :company_phone_number
      t.string :account_number
      t.string :name_on_account
      t.string :email_on_account
      t.string :household_address
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
