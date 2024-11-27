import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/add' element={<AddRecipeForm />} />
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes" element={<RecipeDetails />} />
          <Route path="/recommended-recipes" element={<RecommendationsList />} />
          <Route path="/myfavorite-recipes" element={<FavoritesList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App