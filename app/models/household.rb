class Household < ApplicationRecord
  
  has_many :bills, dependent: :destroy
end
