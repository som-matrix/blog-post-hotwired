class CreateLikes < ActiveRecord::Migration[7.1]
  def change
    create_table :likes do |t|
      t.integer :count
      t.references :blog_post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
