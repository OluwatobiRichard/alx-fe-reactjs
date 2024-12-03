import React, { useState } from "react";

const AddRecipeForm = () => {
  // State for form inputs
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value, // Dynamically update the respective field using target.value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!recipe.title || !recipe.ingredients || !recipe.steps) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear any previous errors
    console.log("Submitted Recipe:", recipe);

    // Reset form
    setRecipe({ title: "", ingredients: "", steps: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {error && (
        <p className="text-red-500 mb-4">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-lg font-semibold">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter the ingredients, separated by commas"
            rows="4"
          />
        </div>

        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps" className="block text-lg font-semibold">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter the preparation steps"
            rows="6"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
