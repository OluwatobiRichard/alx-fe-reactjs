import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', margin: '10px 0', padding: '10px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', margin: '10px 0', padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
