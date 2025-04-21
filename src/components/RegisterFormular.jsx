import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const RegisterFormular = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    passwort: "",
    passwortWdh: "",
  });
  const [fehler, setFehler] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, passwort, passwortWdh } = formData;

    if (!validateEmail(email)) {
      setFehler("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    if (passwort.length < 8) {
      setFehler("Das Passwort muss mindestens 8 Zeichen lang sein.");
      return;
    }
    if (passwort !== passwortWdh) {
      setFehler("Passwörter stimmen nicht überein.");
      return;
    }

    // TODO: Hier Registrierung per API/Supabase/etc.
    // simuliert ein Token und ruft login() aus dem Context auf:
    const fakeToken = "abc123";
    login(email, fakeToken);

    setFehler("");
    navigate("/");
  };

  return (
    <section className="max-w-xl mx-auto mt-12 bg-[#DCDEF2] p-6 rounded-xl shadow-lg border border-[#A67C7C]">
      <h2 className="text-2xl font-bold text-[#260101] mb-6 text-center">Registrieren</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-[#260101] font-medium">
            E‑Mail <sup className="text-red-500">*</sup>
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

        <div>
          <label className="block text-[#260101] font-medium">
            Passwort wiederholen <sup className="text-red-500">*</sup>
          </label>
          <input
            type="password"
            name="passwortWdh"
            value={formData.passwortWdh}
            onChange={handleInputChange}
            placeholder="Nochmals eingeben"
            className="w-full mt-1 px-4 py-2 border border-[#A67C7C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
            required
          />
        </div>

        {fehler && <p className="text-red-600 text-sm">{fehler}</p>}

        <button
          type="submit"
          className="w-full bg-[#8C5A67] text-white py-2 px-4 rounded-md hover:bg-[#A67C7C] transition"
        >
          Registrieren
        </button>
      </form>
      <p className="text-center mt-4 text-[#260101]">
        Schon ein Konto?{" "}
        <Link to="/login" className="text-[#8C5A67] hover:underline">
          Hier einloggen
        </Link>
      </p>
    </section>
  );
};

export default RegisterFormular;
