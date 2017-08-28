class UserServices < ActiveRecord::Migration[5.1]
  def change
    create_table :user_services do |t|
      t.references :user
      t.references :service

      t.timestamps
    end
  end
end
