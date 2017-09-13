class AddUsernameBirthdayAndPhoneNumberToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :phonenumber, :string
    add_column :users, :username, :string
    add_column :users, :birthday, :string
  end
end
