// 📁 src/context/AuthContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

/**
 * AuthContext stellt bereit:
 *  - user           → aktuelles Supabase-User-Objekt oder null
 *  - isAuthLoading  → true, solange wir die Session initial laden
 *  - login(session) → Helper, um nach Magic-Link o.Ä. die Session zu setzen
 *  - logout()       → Supabase-Abmeldung + Aufräumen (LocalStorage etc.)
 */
export const AuthContext = createContext({
  user: null,
  isAuthLoading: true,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // 1️⃣ Initiale Session abfragen
    async function initSession() {
      console.debug('🔄 Supabase: Prüfe vorhandene Session …');
      const { data, error } = await supabase.auth.getSession();
      if (error) console.error('❌ Supabase.getSession-Fehler:', error);
      setUser(data?.session?.user ?? null);
      setAuthLoading(false);
    }
    initSession();

    // 2️⃣ Live-Listener für Auth-Status-Änderungen
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      console.debug('🛰 Supabase onAuthStateChange:', event, session);
      setUser(session?.user ?? null);
    });

    return () => {
      console.debug('🧹 Supabase: Entferne Auth-Listener');
      listener.subscription.unsubscribe();
    };
  }, []);

  /**
   * login: setzt den vollen Supabase-User aus einer Session
   * @param {{session: {user: object, access_token: string}}} session
   */
  const login = (session) => {
    console.debug('🔑 login(session)');
    try {
      if (session) {
        localStorage.setItem('authToken', session.access_token);
        setUser(session.user);
      }
    } catch (err) {
      console.error('❌ login Error:', err);
    }
  };

  /**
   * logout: Supabase signOut + Aufräumen des Context-State
   */
  const logout = async () => {
    console.debug('🚪 logout');
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error('❌ signOut-Fehler:', err);
    } finally {
      localStorage.removeItem('authToken');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
