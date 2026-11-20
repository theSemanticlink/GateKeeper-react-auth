// ============================================
// ProtectedRoute
// ============================================
// Wrap any page with this component to make it accessible
// only to logged-in users.
//
//   <ProtectedRoute><Dashboard /></ProtectedRoute>

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 1) Firebase is still checking the saved session -> wait
  //    (without this, a refresh on /dashboard would wrongly redirect to /login)
  if (loading) {
    return <p className="center-text">Loading...</p>;
  }

  // 2) Not logged in -> redirect to /login
  //    "state" remembers the page they wanted, so we can send them back after login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3) Logged in -> show the requested page
  return children;
};

export default ProtectedRoute;
