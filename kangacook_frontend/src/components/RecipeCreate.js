import React, { useState } from 'react';

const RecipeCreate = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = { name, ingredients, instructions };

    fetch('/api/recipes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Recipe created:', data);
      })
      .catch((error) => {
        console.error('Error creating recipe:', error);
      });
  };

  return (
    <div className='recipeCreate'>
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Ingredients:
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Instructions:
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default RecipeCreate;
