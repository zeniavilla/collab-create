# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Service.destroy_all

DATA = {
  :service_keys => ['name', 'img_url'],
  :services => [
    ['Blogging', 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/F2DIQQ3LUT.jpg'],
    ['Food Styling', 'https://static.pexels.com/photos/574111/pexels-photo-574111.jpeg'],
    ['Hair', 'https://static.pexels.com/photos/54566/pexels-photo-54566.jpeg'],
    ['Makeup', 'https://static.pexels.com/photos/324655/pexels-photo-324655.jpeg'],
    ['Model', 'https://static.pexels.com/photos/235462/pexels-photo-235462.jpeg'],
    ['Photography', 'https://static.pexels.com/photos/108157/pexels-photo-108157.jpeg'],
    ['Videography', 'https://static.pexels.com/photos/274959/pexels-photo-274959.jpeg'],
    ['Wardrobe Styling', 'https://static.pexels.com/photos/318236/pexels-photo-318236.jpeg'],
    ['Writing', 'https://static.pexels.com/photos/7103/writing-notes-idea-conference.jpg']
  ],
  :user_keys => ['name', 'email', 'password', 'password_confirmation', 'location', 'bio', 'bio_img', 'phone_number', 'website', 'instagram', 'quote', 'service_ids']
}

DATA[:services].each do |service|
  new_service = Service.new
  service.each_with_index do |attribute, i|
    new_service.send(DATA[:service_keys][i] + "=", attribute)
  end
  new_service.save
end

USERS = [
  ["Jackie Jewel", "jj@me.com", 'password', 'password', "Brooklyn, NY", "A comb and hairspray are my paintbrush and your hair is my canvas. Hair styling is my art form and I'd love to work with other artists.", "https://i.pinimg.com/736x/88/df/93/88df9310260e81ce71213e119a0e7457--mid-length-haircuts-haircolor.jpg", "555-383-1000", "http://somesite.com", "instagram", "Your hair is 90% of your selfie", [Service.find_by(name: 'Makeup').id, Service.find_by(name: 'Hair').id]],
  ["Esmie Huron", "esmie@me.com", 'password', 'password', "Long Beach, CA", "I specialize in bridal, beauty, and editorial makeup. I've worked in all facets of makeup: print, video, and TV, and I love to collaborate with new creatives :)", "http://img.allw.mn/content/makeup/2012/07/25.jpg", "555-399-1300", "http://somesite.com", "instagram", "Put on some lipstick and pull yourself together - Elizabeth Taylor.", [Service.find_by(name: 'Makeup').id, Service.find_by(name: 'Hair').id]],
  ["Parker Abrams", "parker@me.com", 'password', 'password', "Seattle, WA", "I've styled the hair of celebrities, supermodels, and brides. I don't shy away from color and I love creating a style that makes my client feel confident.", "http://www.loverstyles.com/images/1454750572_pretty-updo-for-long-hair-2016.jpg", "555-728-1310", "http://somesite.com", "instagram", "Life is too short to have boring hair.", [Service.find_by(name: 'Makeup').id, Service.find_by(name: 'Hair').id]],
  ["Tomas Frank", "tomas@me.com", 'password', 'password', "San Francisco, CA", "I have to walk around with a camera within arm's reach because I find inspiration everywhere.", "https://static.pexels.com/photos/68775/pexels-photo-68775.jpeg", "555-182-1200", "http://somesite.com", "instagram", "When life gets blurry, adjust your focus.", [Service.find_by(name: 'Photography').id, Service.find_by(name: 'Videography').id]],
  ["Holden Caulfield", "holden@me.com", 'password', 'password', "NYC, NY", "Writing allows me to express my thoughts like no other medium. I can do the same for you.", "https://static.pexels.com/photos/269810/pexels-photo-269810.jpeg", "555-339-1300", "http://somesite.com", "instagram", "People always clap for the wrong things.", [Service.find_by(name: 'Writing').id]],
  ["Gabi Diamond", "gabi@me.com", 'password', 'password', "San Francisco, CA", "I fell in love with cooking and food styling when I served my first dish. The look in people's eyes kept me going back.", "https://static.pexels.com/photos/196643/pexels-photo-196643.jpeg", "555-728-1310", "http://somesite.com", "instagram", "There is no sincerer love than the love of food - George Bernard Shaw.", [Service.find_by(name: 'Food Styling').id]],
  ["Taylor Warren", "taylor@me.com", 'password', 'password', "Los Angeles, CA", "I've done editorial shoots, styled celebs for Red Carpet events, and done costume design for TV. Let's put our heads together and create something new.", "https://static.pexels.com/photos/179909/pexels-photo-179909.jpeg", "555-828-1010", "http://somesite.com", "instagram", "Simplicity is the keynote of all true elegance - Coco Chanel.", [Service.find_by(name: 'Wardrobe Styling').id]],
  ["Sophia Rodriguez", "sophia@me.com", 'password', 'password', "Miami, FL", "My main focus is fashion but I create posts about lifestyle. I'm looking to expand my project range and work with cool creatives.", "https://static.pexels.com/photos/191429/pexels-photo-191429.jpeg", "555-808-1013", "http://somesite.com", "instagram", "Be fearless in the pursuit of what sets your soul on fire.", [Service.find_by(name: 'Blogging').id]],
  ["Maja Anderson", "maja@me.com", 'password', 'password', "Playa Vista, CA", "I've been modeling since I was ten years old. I have experience in editorial but I'd love to try more commercial work.", "https://static.pexels.com/photos/371110/pexels-photo-371110.jpeg", "555-808-1013", "http://somesite.com", "instagram", "Be fearless in the pursuit of what sets your soul on fire.", [Service.find_by(name: 'Model').id]]
]

USERS.each do |user|
  new_user = User.new
  user.each_with_index do |attribute, i|
    new_user.send(DATA[:user_keys][i] + "=", attribute)
  end
  new_user.save
end