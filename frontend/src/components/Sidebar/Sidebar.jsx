import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaClipboardList, FaListUl } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const URL = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCAL_URL;

export default function Sidebar() {
  return (
    <div className="sidebar flex flex-col justify-between bg-[#bbf7d0] h-full">
      <ul className="flex flex-col gap-2 my-3">
        <li className="mr-3 rounded-r-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-2 bg-green-600 text-white pl-8 rounded-r-lg"
                : "flex items-center gap-2 p-2 bg-green-500 pl-8 rounded-r-lg"
            }
          >
            <MdDashboard className="h-8" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="mr-3 rounded-r-lg">
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-2 bg-green-600 text-white pl-8 rounded-r-lg"
                : "flex items-center gap-2 p-2 bg-green-500 pl-8 rounded-r-lg"
            }
          >
            <FaClipboardList className="h-8" />
            <span>Recipes</span>
          </NavLink>
        </li>
        <li className="mr-3 rounded-r-lg">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-2 bg-green-600 text-white pl-8 rounded-r-lg"
                : "flex items-center gap-2 p-2 bg-green-500 pl-8 rounded-r-lg"
            }
          >
            <CgProfile className="h-8" />
            <span>Profile</span>
          </NavLink>
        </li>
        <li className="mr-3 rounded-r-lg">
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-2 bg-green-600 text-white pl-8 rounded-r-lg"
                : "flex items-center gap-2 p-2 bg-green-500 pl-8 rounded-r-lg"
            }
          >
            <FiLogOut className="h-8" />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
      <span>{URL}</span>
      <button className="mr-3 mb-3 rounded-r-lg">
        <NavLink
          to="/my-recipes"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 p-2 bg-green-600 text-white pl-8 rounded-r-lg"
              : "flex items-center gap-2 p-2 bg-green-500 pl-8 rounded-r-lg"
          }
        >
          {" "}
          <FaListUl className="h-8" />
          <span>My Recipes</span>
        </NavLink>
      </button>
    </div>
  );
}
