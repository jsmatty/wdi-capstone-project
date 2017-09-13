def get_utility_bill_data
  utility_bill_data = {
    'water' => {
      type: 'water',
      company: 'Atlanta Watershed',
      company_phone_number: '(404) 546-0311',
      company_address: '55 Trinity Avenue',
      account_number: '567-asd',
      name_on_account: 'Bill Clinton',
      email_on_account: 'BillC@gmail.com',
    },
    'power' => {
      type: 'power',
      company: 'Georgia Power',
      company_phone_number: '(888) 660-5890',
      company_address: '96 Annex',
      account_number: '123-qwe',
      name_on_account: 'Monica Lewinsky',
      email_on_account: 'monica@me.com',
    },
    'cable/internet' => {
      type: 'cable/internet',
      company: 'Comcast',
      company_phone_number: '(404) 266-2278',
      company_address: '3620 Camp Creek Pkwy',
      account_number: '890-zxc',
      name_on_account: 'Richard Nixon',
      email_on_account: 'watergate@me.com'
    },
    'gas' => {
      type: 'gas',
      company: 'Atlanta Gas Light',
      company_phone_number: '(800) 427-5463',
      company_address: '10 Peachtree Pl NE',
      account_number: '102-mnb',
      name_on_account: 'Donald Trump',
      email_on_account: 'covfefe@yahoo.com'

    }
  }
  utility_bill_data
end