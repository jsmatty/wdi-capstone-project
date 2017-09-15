class Household < ApplicationRecord
  belongs_to :user
  has_many :bills, dependent: :destroy
end
