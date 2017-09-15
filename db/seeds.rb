# require_relative './bill_data.rb'


# Bill.destroy_all


# bill_data = get_song_data


# utility_bill_data.each_pair do |utility_bill_type, utility_bill|
#   info = utility_bill_data[utility_bill_type]
#   current_utility_bill = UtilityBill.create!({
#     type:         info[:type],
#   })

#   utility_bills.each do |utility_bill|
#     UtilityBill.create!({
#       type:                   current_utility_bill[:type],
#       company:                utility_bill[:compant],
#       company_phone_number:   utility_bill[:company_phone_number],
#       account_number:         utility_bill[:account_number],
#       name_on_account:        utility_bill[:name_on_account],
#       email_on_account:       utility_bill[:email_on_account]
#     })
#   end
# end

jess = User.new
jess.email = 'bob@gmail.com'
jess.password = 'password'
jess.password_confirmation = 'password'
jess.save