# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Service.destroy_all

DATA = {
  :service_keys => ['name', 'img_url']
  :services => [
    ['Food Styling', 'https://static.pexels.com/photos/574111/pexels-photo-574111.jpeg'],
    ['Hair', 'https://static.pexels.com/photos/54566/pexels-photo-54566.jpeg'],
    ['Makeup', 'https://static.pexels.com/photos/324655/pexels-photo-324655.jpeg'],
    ['Model', 'https://static.pexels.com/photos/235462/pexels-photo-235462.jpeg'],
    ['Photography', 'https://static.pexels.com/photos/108157/pexels-photo-108157.jpeg'],
    ['Videography', 'https://static.pexels.com/photos/274959/pexels-photo-274959.jpeg'],
    ['Wardrobe Styling', 'https://static.pexels.com/photos/318236/pexels-photo-318236.jpeg']
  ]
}

DATA[:services].each do |service|
  new_service = Service.new
  service.each_with_index do |attribute, i|
    new_service.send(DATA[:service_keys][i] + "=", attribute)
  end
  new_service.save
end