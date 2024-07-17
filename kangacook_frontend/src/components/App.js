import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RecipeList from './RecipeList';
import RecipeCreate from './RecipeCreate';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/create" element={<RecipeCreate />} />
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;
