// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Erstelle den Context
export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

// Provider‑Komponente
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Beim Mount z.B. Token aus localStorage laden
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // TODO: evtl. Benutzer‑Daten dazu holen
      setUser({ email: localStorage.getItem("userEmail") });
    }
  }, []);

  const login = (email, token) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
    setUser({ email });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
