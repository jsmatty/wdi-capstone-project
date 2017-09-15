User.delete_all
Bill.delete_all
Household.delete_all
User.create(id: 1,
            email: 'jess@sample.com',
            password: 'password',
            birthday: '12/09/1989',
            image: "https://randomuser.me/api/portraits/men/83.jpg",
            nickname:"jess",
            name: "Jessica",
            uid: 1
            )

User.create(id: 2,
            email: 'aubs@sample.com',
            password: 'password',
            birthday: '11/17/1990',
            image: "https://randomuser.me/api/portraits/men/83.jpg",
            nickname: "Aubs",
            name: "Aubrey",
            uid: 2
            )

Bill.create(
            bill_id:1,
            type: "Power",
            company: "Ga Power",
            company_address: "1122 samson street Atlanta GA 30309",
            account_number: "5T90PFTi9",
            email_on_account: "jess@sample.com",
            household_address: " 530 highland ave atlanta ga 30308"
)
Bill.create(
            bill_id:2,
            type: "Cable",
            company: "Comcast",
            company_address: "779 creek street Atlanta GA 30309",
            account_number: "5T90PFTi9",
            email_on_account: "jess@sample.com",
            household_address: " 530 highland ave atlanta ga 30308"
)
Household.create(
            user_id:1,
)
Household.create(
            user_id:2,
)