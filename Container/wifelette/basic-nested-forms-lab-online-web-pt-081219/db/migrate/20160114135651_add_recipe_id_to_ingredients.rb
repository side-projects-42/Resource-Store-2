class AddRecipeIdToIngredients < ActiveRecord::Migration[4.2]
  def change
    add_column :ingredients, :recipe_id, :integer
  end
end
