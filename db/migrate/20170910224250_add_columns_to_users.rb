class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :dob, :date
    add_column :users, :location, :string
    add_column :users, :bio, :string
    add_column :users, :bio_img, :string
    add_column :users, :phone_number, :string
    add_column :users, :website, :string
    add_column :users, :instagram, :string
    add_column :users, :liked, :boolean
    add_column :users, :likes, :bigint
  end
end
