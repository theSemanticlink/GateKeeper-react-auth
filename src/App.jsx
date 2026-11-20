// ============================================
// App.jsx - Routing
// ============================================
//  Page        Route         Access
//  Home        /             Public
//  Login       /login        Public
//  Register    /register     Public
//  Dashboard   /dashboard    Protected
//  Profile     /profile      Protected

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      {/* Outside <Routes>, so the Navbar appears on every page */}
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Any unknown URL */}
        <Route path="*" element={<div className="page"><h1>404 - Page Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
