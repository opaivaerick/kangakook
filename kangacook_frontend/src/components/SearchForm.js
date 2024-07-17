import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(ingredients);
  };

  return (
    <div className='searchForm'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma separated)"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
