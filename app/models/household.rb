class Household < ApplicationRecord
  # has_many :users
  has_many :bills, dependent: :destroy
end
