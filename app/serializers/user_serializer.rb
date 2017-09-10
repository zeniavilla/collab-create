class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :services, through: :user_services
end
