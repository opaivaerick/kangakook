import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1>Kangacook</h1>
      <p>Discover and recreate authentic Asian recipes using local ingredients.</p>
      <Link to="/recipes">Go to Recipes   |</Link>
      <Link to="/recipes/create">   Create a New Recipe</Link>
    </div>
  );
};

export default Home;
