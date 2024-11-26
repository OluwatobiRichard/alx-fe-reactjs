import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    } else {
      alert('Both fields are required!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{ display: 'block', margin: '10px 0', padding: '10px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={{ display: 'block', margin: '10px 0', padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
