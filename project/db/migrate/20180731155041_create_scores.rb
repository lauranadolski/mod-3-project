class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :total_score
      t.references :users
      t.timestamps
    end
  end
end
