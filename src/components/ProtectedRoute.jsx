import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { user, isAuthLoading } = useContext(AuthContext);
  const location = useLocation();             // ← merken, wohin der User wollte

  if (isAuthLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#8C5A67]" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
