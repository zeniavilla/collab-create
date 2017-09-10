class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :users, through: :user_services
end
