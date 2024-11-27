import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';

const App = () => (
  <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h1>Recipe Sharing App</h1>
    <SearchBar />
    <AddRecipeForm />
    <RecipeList />
  </div>
);

export default App;
