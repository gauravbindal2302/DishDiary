import React, { useState } from "react";
import { Link } from "react-router-dom";
import items from "../../items.js";

export default function MyRecipes() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = () => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <>
      <div className="recipe-section p-4 bg-gray-200">
        <div className="mb-4 flex justify-between items-center p-2">
          <h2 className="text-2xl font-bold">My Recipes</h2>
          <button>
            <Link
              to="/add-recipe"
              className="btn-primary text-sm bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Add New Recipe
            </Link>
          </button>
        </div>

        <div className="search-recipes mx-4 mb-6">
          <input
            type="text"
            className="w-full p-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for Recipe"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="recipe-list px-4 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems().map((item) => (
            <Link
              key={item.id}
              to={`/manage-recipe/${item.id}`}
              className="card-link"
            >
              <div
                key={item.id}
                className="recipe-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover"
                />
                <div className="py-3 px-4">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600 mt-1">
                    {item.time} | {item.servings} Servings
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
