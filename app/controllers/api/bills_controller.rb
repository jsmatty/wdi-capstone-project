class Api::BillsController < ApplicationController
  def index
    @bills = Bill.all
    render json: @bills
  end

def show 
  @bills = Bill.find(params[:id])
  render json: {
    bills: @bills
  }
end

def create
  @bill = bill.create!(bill_params)

  redirect_to api_bill_path(@bill)
end

def update
  @bill = Bill.find params[:id]
  @bill.update(bill_params)
end

def destroy
  @bill = Bill.find params[:id]
  @household.destroy
end 

private

def bill_params
  @bill_params = params.require(:bill).permit(:type, :company, :company_phone_number, :account_number, :name_on_account, :email_on_account, :household_address)
end  

end
