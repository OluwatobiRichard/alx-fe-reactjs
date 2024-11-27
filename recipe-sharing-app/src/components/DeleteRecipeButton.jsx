import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete?")) {
            deleteRecipe(recipeId);
            navigate(-1); // Navigate back to the previous page
        }
    };

    return (
        <button onClick={handleDelete}>Delete Recipe</button>
    );
};

export default DeleteRecipeButton;