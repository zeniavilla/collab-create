class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url
  has_many :users, through: :user_services
end
