class Api::UsersController < ApplicationController
 def index
    @users = User.all
    render json: @users
 end

def show
    
    @user = User.find params[:id]
    @households = @user.households.all
    render json: {user: @user, 
                households: @households}
end

def create
    @user = User.create!(user_params)

    redirect_to api_user_path(@user)
end

def update
    @user = User.find params[:id]
    @user.update(user_params)
end

def destroy
    @user = User.find params[:id]
    @user.destroy
end

private
def user_params
    @user_params = params.require(:user).permit(:image, :name, :email, :username, :phonenumber, :birthday)
end
end
