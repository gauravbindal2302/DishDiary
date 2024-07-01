import React, { useState } from "react";
import axios from "axios";

export default function AddNewRecipe() {
  const SERVER_URL = process.env.REACT_APP_LOCAL_URL;

  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [instructions, setInstructions] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [noOfServings, setNoOfServings] = useState("");

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleIngredientChange = (index, event) => {
    const { name, value } = event.target;
    const newIngredients = [...ingredients];
    newIngredients[index][name] = value;
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleSubmit = async () => {
    if (
      recipeName &&
      ingredients.length > 0 &&
      instructions &&
      prepTime &&
      noOfServings
    ) {
      const formattedIngredients = ingredients
        .map((ingredient) => {
          return `${ingredient.name}: ${ingredient.quantity}`;
        })
        .join("\n");

      const servingsText = noOfServings === 1 ? "person" : "persons";

      const recipeData = {
        recipeName,
        ingredients,
        instructions,
        prepTime,
        noOfServings,
      };

      try {
        const response = await axios.post(
          `${SERVER_URL}/addRecipe`,
          recipeData
        );
        console.log("Recipe added successfully:", response.data);
        alert(`
          Recipe Name: ${recipeName}
            
          Ingredients:
          ${formattedIngredients}
            
          Instructions:
          ${instructions}
            
          Preparation Time:
          ${prepTime} minutes
            
          No of Servings:
          ${noOfServings} ${servingsText}
            `);
      } catch (error) {
        console.error("Error adding recipe:", error);
      }
    } else {
      alert("Fill all the details!");
    }
  };
  return (
    <>
      <div className="publish-recipe p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
        <div>
          <div className="mb-6">
            <label
              htmlFor="recipeName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Recipe Name
            </label>
            <input
              type="text"
              id="recipeName"
              className="mt-1 p-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="Enter Recipe Name"
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ingredients
              </label>
              <button
                type="button"
                className="text-sm font-medium text-gray-700 mb-2 hover:underline"
                onClick={handleAddIngredient}
              >
                Add More Ingredient
              </button>
            </div>{" "}
            <div className="flex flex-col gap-2">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-4">
                  <input
                    type="text"
                    id={`ingredientName${index}`}
                    name="name"
                    className="mt-1 p-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter Ingredient Name"
                    value={ingredient.name}
                    onChange={(e) => handleIngredientChange(index, e)}
                  />
                  <input
                    type="text"
                    id={`ingredientQuantity${index}`}
                    name="quantity"
                    className={
                      index === 0
                        ? "mt-1 p-1 px-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        : "mt-1 p-1 px-2 w-[calc(100%-80px)] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    }
                    placeholder="Enter Ingredient Quantity"
                    value={ingredient.quantity}
                    onChange={(e) => handleIngredientChange(index, e)}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                      className="w-[30px] mt-1 px-2 bg-white rounded-lg"
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
            </div>{" "}
          </div>

          <div className="mb-4">
            <label
              htmlFor="instructions"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              className="mt-1 p-1 px-2 resize-none h-16 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter Instructions"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="prepTime"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Prep Time (mins)
              </label>
              <input
                type="text"
                id="prepTime"
                className="mt-1 p-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                placeholder="Enter Preparation Time"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="servings"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Servings
              </label>
              <input
                type="number"
                id="servings"
                className="mt-1 p-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={noOfServings}
                onChange={(e) => setNoOfServings(e.target.value)}
                placeholder="Enter Number of Servings"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value=""
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleSubmit}
            >
              Publish Recipe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
