class Api::ServicesController < ApplicationController
  before_action :set_service, only: [:show, :update, :destroy]

  def index
    services = Service.all
    render json: services
  end

  def show
    render json: @service
  end

  def create
    service = Service.new(service_params)
    if service.save
      render json: service
    else
      render json: { message: service.errors }, status: 400
    end
  end

  def update
    @service = Service.assign_attributes(service_params)
    if service.save
      render json: service
    else
      render json: { message: service.errors }, status: 400
    end
  end

  def destroy
    if @service.destory
      render status: 204
    else
      render json: { message: 'Unable to delete service' }, status: 400
    end
  end

  private

    def set_service
      @service = Service.find_by(id: params[:id])
    end

    def service_params
      params.require(:service).permit(:name)
    end

end