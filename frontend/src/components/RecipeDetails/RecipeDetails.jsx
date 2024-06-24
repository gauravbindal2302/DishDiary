import React from "react";
import { useParams } from "react-router-dom";
import items from "../../items";

export default function RecipeDetails() {
  const { id } = useParams();
  const itemId = parseInt(id);

  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return <div>Recipe not found.</div>;
  }

  return (
    <>
      <div className="recipe-list p-4 flex flex-col gap-8">
        <div key={item.id} className="recipe-details">
          <div className="recipe-details-content flex flex-col gap-4 w-full md:w-1/2">
            <span className="text-2xl font-bold">{item.name}</span>
            <img
              src={item.image}
              alt={`${item.name}-image`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <div className="details flex gap-6">
                <p>Time: {item.time}</p>
                <p>Servings: {item.servings}</p>
              </div>
              <div className="description">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p>{item.description}</p>
              </div>
              <div className="ingredients">
                <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                <ul>
                  {Object.entries(item.ingredients).map(
                    ([ingredient, amount], index) => (
                      <li key={index}>{`${ingredient} - ${amount}`}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
