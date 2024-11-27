import useRecipeStore from './recipeStore';
import { Link, useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipeId} />
            <Link to="/">Back to List</Link>
        </div>
    );
};

export default RecipeDetails;