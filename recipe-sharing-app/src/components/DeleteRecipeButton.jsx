import { useRecipeStore } from '../components/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Navigate to the home page or another route after deletion
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: '10px 20px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
