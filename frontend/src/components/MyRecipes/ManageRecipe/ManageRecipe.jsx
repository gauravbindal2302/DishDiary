import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import items from "../../../items";

export default function ManageRecipe() {
  const [editData, setEditData] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [updateTime, setUpdateTime] = useState("");
  const [updateServings, setUpdateServings] = useState("");
  const [updateImage, setUpdateImage] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const { id } = useParams();
  const itemId = parseInt(id);

  const item = items.find((item) => item.id === itemId);

  useEffect(() => {
    if (item) {
      setUpdateName(item.name);
      setUpdateTime(item.time);
      setUpdateServings(item.servings);
      setUpdateImage(item.image);
      setUpdateDescription(item.description);
      setIngredients(
        item.ingredients
          ? Object.entries(item.ingredients).map(([name, quantity]) => ({
              name,
              quantity,
            }))
          : []
      );
    }
  }, [item]);

  if (!item) {
    return <div>Recipe not found.</div>;
  }

  const handleSave = () => {
    alert("Save Data Button is Clicked!");
    setEditData(false);
  };

  const handleIngredientChange = (index, event) => {
    const { name, value } = event.target;
    const newIngredients = [...ingredients];
    newIngredients[index][name] = value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  return (
    <div className="manage-recipe p-4 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl font-bold">
          {editData ? "Edit Recipe" : "Recipe Details"}
        </span>
        <button
          className="btn-primary text-sm bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            if (editData) {
              handleSave();
            }
            setEditData(!editData);
          }}
        >
          {editData ? "Save Changes" : "Edit this Recipe"}
        </button>
      </div>
      <form className="grid gap-8">
        <div className="flex flex-col-reverse lg:flex-row w-full gap-8">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div>
              <label
                htmlFor="recipeName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Recipe Name <span className="text-red-500">*</span>
              </label>
              {editData ? (
                <input
                  type="text"
                  id="recipeName"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                  required
                />
              ) : (
                <p className="p-2 border border-gray-300 rounded-md">
                  {updateName}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="updateTime"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Prep Time (mins) <span className="text-red-500">*</span>
              </label>
              {editData ? (
                <input
                  type="text"
                  id="updateTime"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={updateTime}
                  onChange={(e) => setUpdateTime(e.target.value)}
                  required
                />
              ) : (
                <p className="p-2 border border-gray-300 rounded-md">
                  {updateTime}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="updateServings"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Servings <span className="text-red-500">*</span>
              </label>
              {editData ? (
                <input
                  type="number"
                  id="updateServings"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={updateServings}
                  onChange={(e) => setUpdateServings(e.target.value)}
                  required
                />
              ) : (
                <p className="p-2 border border-gray-300 rounded-md">
                  {updateServings}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {editData ? (
              <div className="h-full">
                <label
                  htmlFor="recipeImage"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Upload Image <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center justify-center border border-dashed border-gray-300 rounded-lg h-56">
                  <input
                    type="file"
                    id="recipeImage"
                    accept="image/*"
                    className="absolute w-full h-full cursor-pointer opacity-0"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => setUpdateImage(reader.result);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <div className="absolute text-center pointer-events-none">
                    <p>Click to upload image</p>
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={updateImage}
                alt={`${updateName}-image`}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="mb-6">
            <label
              htmlFor="updateDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description <span className="text-red-500">*</span>
            </label>
            {editData ? (
              <textarea
                id="updateDescription"
                className="mt-1 p-2 resize-none block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-24"
                value={updateDescription}
                onChange={(e) => setUpdateDescription(e.target.value)}
                required
              />
            ) : (
              <p className="p-2 border border-gray-300 rounded-md">
                {updateDescription}
              </p>
            )}
          </div>
          <div className="mb-6">
            <div className="flex justify-between">
              {" "}
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ingredients
              </label>
              {editData ? (
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="text-sm font-medium text-gray-700 mb-2 hover:underline"
                >
                  Add Ingredient
                </button>
              ) : (
                ""
              )}
            </div>

            {editData ? (
              <div className="flex flex-col gap-2">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <input
                      type="text"
                      id={`ingredientName${index}`}
                      name="name"
                      className="mt-1 p-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Ingredient Name"
                      value={ingredient.name}
                      onChange={(e) => handleIngredientChange(index, e)}
                      required
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
                      required
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveIngredient(index)}
                        className="px-2 bg-white rounded-lg"
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <ul className="list-inside p-2 border border-gray-300 rounded-md">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {`${ingredient.name} - ${ingredient.quantity}`}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
