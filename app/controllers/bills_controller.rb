# class BillsController < ApplicationController
#   def index
#     @bills = bill.all
#   end

#   def create
#     @bill = bill.new(bill_params)

#     if @bill.save
#       render json: @bill
#     else
#       render json: @bill.errors, status: :unprocessable_entity
#     end
#   end

#   def update
#     @bill = Bill.find(params[:id])
#     if @bill.update(bill_params)
#       render json: @bill
#     else
#       render json: @bill.errors, status: :unprocessable_entity
#     end
#   end

#   def destroy
#     @bill = Bill.find(params[:id])
#     @bill.destroy
#     head :no_content
#   end

#   private

#     def bill_params
#       params.require(:bill).permit(:title, :amount, :date)
#     end
# end