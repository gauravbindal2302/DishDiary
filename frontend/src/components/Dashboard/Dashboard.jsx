import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Recipes from "../Recipes/Recipes";
import Profile from "../Profile/Profile";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import MyRecipes from "../MyRecipes/MyRecipes.jsx";
import AddNewRecipe from "../MyRecipes/AddNewRecipe/AddNewRecipe.jsx";
import { Routes, Route } from "react-router-dom";
import ManageRecipe from "../MyRecipes/ManageRecipe/ManageRecipe.jsx";
import Authentication from "../Authentication/Authentication.jsx";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard flex flex-col h-screen bg-[#94a3b8]">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="flex flex-grow min-h-0">
          <div className="sidebar hidden lg:block lg:w-[15%] flex-shrink-0">
            <Sidebar />
          </div>
          <div className="content lg:w-[85%] flex-grow min-h-0 overflow-auto">
            <Routes>
              <Route path="/" element={<Authentication />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/my-recipes" element={<MyRecipes />} />
              <Route path="/add-recipe" element={<AddNewRecipe />} />
              <Route path="/manage-recipe/:id" element={<ManageRecipe />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
