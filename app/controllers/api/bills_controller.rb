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
end
