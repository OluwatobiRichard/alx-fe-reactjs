import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Array of favorite recipe IDs
  recommendations: [], // Personalized recommendations

  addFavorite: (recipeId) =>
    set((state) => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return state; // Avoid duplicates
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock criteria
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
