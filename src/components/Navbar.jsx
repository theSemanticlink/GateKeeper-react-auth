// ============================================
// Navbar
// ============================================
// Shown on every page.
// Logged in  -> Home, Dashboard, Profile, Logout
// Logged out -> Home, Login, Register

import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand"> GateKeeper </Link>

      <div className="nav-links">
        {/* NavLink adds an "active" class to the current page's link */}
        <NavLink to="/">Home</NavLink>

        {user ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={handleLogout} className="btn btn-danger btn-small">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
