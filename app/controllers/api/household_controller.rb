class Api::HouseholdController < ApplicationController
   def index
        @user = User.find(params[:user_id])
        @household = @user.household.all
    
        render json:{user: @user, household: @household}
      end
    
      def show
        @user = User.find(params[:user_id])
        @household = @user.household.find params[:id]
    
        render json: @household
      end
      def create
        @household = household.create!(household_params)
    
        redirect_to api_household_path(@household)
    end
    
    def update
        @household = Household.find params[:id]
        @household.update(household_params)
    end
    
    def destroy
        @household = Household.find params[:id]
        @household.destroy
    end
    
    private
    def household_params
        household_params = params.require(:household).permit(:users)
      end

end
