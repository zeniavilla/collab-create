class AddImgUrlToServices < ActiveRecord::Migration[5.1]
  def change
    add_column :services, :img_url, :string
  end
end
