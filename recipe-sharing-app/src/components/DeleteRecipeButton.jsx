import { useRecipeStore } from '../components/recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDelete) onDelete();
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: '10px 20px',
        margin: '10px 0',
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
