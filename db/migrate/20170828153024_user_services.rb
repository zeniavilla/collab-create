class UserServices < ActiveRecord::Migration[5.1]
  def change
    create_table :user_services do |t|
      t.belongs_to :user
      t.belongs_to :service

      t.timestamps
    end
  end
end
