import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar flex items-center lg:justify-center justify-between bg-gray-200 lg:p-3 px-4 py-3 relative border-b border-black">
        <div className="logo flex items-center justify-center">
          <h1 className="text-lg">Dish Diary</h1>
        </div>
        <div
          className="menu-icon"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        >
          {menuOpen ? (
            <MdOutlineCancel className="lg:hidden h-4 cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="lg:hidden h-4 cursor-pointer" />
          )}
        </div>
        {menuOpen && (
          <div className="menu absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 z-50 lg:hidden border-t border-black">
            <ul className="space-y-2 text-center">
              <li onClick={() => setMenuOpen(false)}>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li onClick={() => setMenuOpen(false)} className="py-3">
                <Link to="/profile">Profile</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="pt-2 border-t border-black"
              >
                <Link to="/my-recipes" className="block py-1">
                  My Recipes
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
