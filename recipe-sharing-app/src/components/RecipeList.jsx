import { useRecipeStore } from '../components/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipe List</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes available. Add a recipe to get started!</p>
      )}
    </div>
  );
};

export default RecipeList;
