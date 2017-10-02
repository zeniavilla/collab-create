class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def show
    render json: @user
  end

  def update
    @user.update_attributes(user_params)
    render json: user
  end

  def destroy
    @user.destroy
    render status: 204
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :location, :website, :instagram, :phone_number, :bio, :bio_img, :quote, :service_ids => [])
  end
end
