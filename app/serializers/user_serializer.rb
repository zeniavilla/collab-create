class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :bio_img, :website, :phone_number, :instagram, :location, :dob, :likes, :liked
  has_many :services, through: :user_services
end
