import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';

const App = () => (
  <Router>
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;
