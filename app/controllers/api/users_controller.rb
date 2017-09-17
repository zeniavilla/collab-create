class Api::UsersController < ApplicationController
  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  def update
    user = User.find_by(id: params[:id])
    user.update_attributes(user_params)
    render json: user
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :location, :website, :instagram, :phone_number, :bio, :bio_img, :quote, :service_ids => [])
  end
end
