import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

/**
 * Enthält:
 *  - user         → aktueller User (oder null)
 *  - isAuthLoading→ true, solange Supabase-Session initial abgefragt wird
 *  - login        → manuelles Setzen (z. B. nach Magic-Link)
 *  - logout       → Abmelden + Aufräumen
 */
export const AuthContext = createContext({
  user: null,
  isAuthLoading: true,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  // 1️⃣ Beim App-Start nach bestehender Session fragen
  useEffect(() => {
    const initSession = async () => {
      console.debug("🔄 Checking existing Supabase session …");
      const { data, error } = await supabase.auth.getSession();
      if (error) console.error("getSession-Fehler:", error);

      setUser(data?.session?.user ?? null);
      setAuthLoading(false);
    };
    initSession();

    // 2️⃣ Live-Listener
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.debug("🛰  onAuthStateChange ->", event);
        setUser(session?.user ?? null);
      }
    );

    return () => listener?.subscription.unsubscribe();
  }, []);

  // Helfer
  const login = (email, token) => {
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
    <AuthContext.Provider value={{ user, login, logout, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
