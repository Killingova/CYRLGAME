// src/components/LoginFormular.jsx
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../context/AuthContext";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const LoginFormular = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    passwort: "",
  });

  const [fehler, setFehler] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, passwort } = formData;

    if (!validateEmail(email)) {
      setFehler("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }

    if (passwort.length < 8) {
      setFehler("Das Passwort muss mindestens 8 Zeichen lang sein.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: passwort,
    });

    if (error) {
      setFehler(error.message);
      return;
    }

    const token = data?.session?.access_token;
    if (token) {
      login(email, token); // speichert in Context + localStorage
    }

    setFehler("");
    navigate("/");
  };

  return (
    <section className="max-w-xl mx-auto mt-12 bg-[#DCDEF2] p-6 rounded-xl shadow-lg border border-[#A67C7C]">
      <h2 className="text-2xl font-bold text-[#260101] mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-[#260101] font-medium">
            E-Mail <sup className="text-red-500">*</sup>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="dein@email.de"
            className="w-full mt-1 px-4 py-2 border border-[#A67C7C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
            required
          />
        </div>

        <div>
          <label className="block text-[#260101] font-medium">
            Passwort <sup className="text-red-500">*</sup>
          </label>
          <input
            type="password"
            name="passwort"
            value={formData.passwort}
            onChange={handleInputChange}
            placeholder="Mindestens 8 Zeichen"
            className="w-full mt-1 px-4 py-2 border border-[#A67C7C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
            required
          />
        </div>

        {fehler && <p className="text-red-600 text-sm">{fehler}</p>}

        <button
          type="submit"
          className="w-full bg-[#8C5A67] text-white py-2 px-4 rounded-md hover:bg-[#A67C7C] transition"
        >
          Einloggen
        </button>
      </form>

      <p className="text-center mt-4 text-[#260101]">
        Noch kein Konto?{" "}
        <Link to="/register" className="text-[#8C5A67] hover:underline">
          Jetzt registrieren
        </Link>
      </p>
    </section>
  );
};

export default LoginFormular;
