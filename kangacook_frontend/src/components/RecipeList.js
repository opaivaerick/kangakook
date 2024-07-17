import React, { useState } from 'react';
import SearchForm from './SearchForm';
import RecipeDetail from './RecipeDetail';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = (ingredients) => {
    fetch(`/api/recipes/search/?ingredients=${ingredients}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className='recipeList'>
      <SearchForm onSearch={handleSearch} />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleSelectRecipe(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
      {selectedRecipe && (
        <div className='recipeDetail'>
          <RecipeDetail recipe={selectedRecipe} />
        </div>
      )}
    </div>
  );
};

export default RecipeList;
