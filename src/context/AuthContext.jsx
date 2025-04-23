// src/context/AuthContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

// Context
export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

// Provider-Komponente
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Session prüfen beim Laden
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        setUser(data.session.user);
      }
    };

    getSession();

    // Live-Listener für Login/Logout
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        localStorage.setItem("authToken", session.access_token);
        localStorage.setItem("userEmail", session.user.email);
      } else {
        setUser(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
      }
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  const login = (email, token) => {
    // Wird bei Supabase automatisch verwaltet, optional:
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
    setUser({ email });
  };

  const logout = async () => {
    await supabase.auth.signOut();
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
