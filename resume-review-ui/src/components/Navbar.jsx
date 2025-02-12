import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const showLinks = location.pathname !== "/login";

  return (
    <nav className="navbar">
      <h2>RESUME Review</h2>
      {showLinks && (
        <div>
          <Link
            to="/"
            className="text-white font-semibold hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
          {isAuthenticated() && (
            <button onClick={() => logout(navigate)} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
