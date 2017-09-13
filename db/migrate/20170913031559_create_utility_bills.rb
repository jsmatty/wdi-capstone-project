class CreateUtilityBills < ActiveRecord::Migration[5.1]
  def change
    create_table :utility_bills do |t|
      t.string :type
      t.string :company
      t.string :company_address
      t.string :company_phone_number
      t.string :account_number
      t.string :name_on_account
      t.string :email_on_account
      t.string :household_address

      t.timestamps
    end
  end
end
