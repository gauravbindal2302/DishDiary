import React from "react";
import items from "../../items";
import { Link } from "react-router-dom";

export default function Recipes() {
  return (
    <>
      <div className="recipes p-4 bg-gray-200">
        <div className="row flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">All Recipes</h2>
          <input
            type="text"
            placeholder="Search By Title"
            className="border border-gray-300 p-1 px-4 rounded-md"
          />
        </div>
        <div className="recipes-content px-4 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link key={item.id} to={`/recipe/${item.id}`} className="card-link">
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
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
