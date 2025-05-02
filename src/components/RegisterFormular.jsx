// 📁 src/components/RegisterFormular.jsx
import React, { useState, useContext, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../supabaseClient';
import { useToast } from '../hooks/useToast';

/**
 * RegisterFormular: Registrierungsformular mit Validierung, Feedback & Redirect.
 */
export default function RegisterFormular() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const toast = useToast();

  // Form-State
  const [formData, setFormData] = useState({
    email: '',
    passwort: '',
    passwortWdh: ''
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Eingaben ändern
  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  // E-Mail-Validierung
  const validateEmail = useCallback(email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  []);

  // Formular abschicken
  const handleSubmit = useCallback(async e => {
    e.preventDefault();
    setError('');
    setMessage('');

    const { email, passwort, passwortWdh } = formData;

    // Frontend-Validation
    if (!validateEmail(email)) {
      setError('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }
    if (passwort.length < 8) {
      setError('Das Passwort muss mindestens 8 Zeichen lang sein.');
      return;
    }
    if (passwort !== passwortWdh) {
      setError('Passwörter stimmen nicht überein.');
      return;
    }

    // Redirect-URL für E-Mail-Confirmation
    const redirectTo = `${import.meta.env.VITE_APP_URL}/#/auth/callback`;
    console.debug('[RegisterFormular] Signup mit:', email);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password: passwort,
        options: { emailRedirectTo: redirectTo }
      });
      if (signUpError) throw signUpError;

      setMessage(
        'Bestätigungs-E-Mail wurde versendet. Bitte prüfe dein Postfach.'
      );
      setFormData({ email: '', passwort: '', passwortWdh: '' });

      // Optional: direkt einloggen
      if (data?.session) {
        login(data.session);
        navigate('/');
      }
    } catch (err) {
      console.error('[RegisterFormular] Signup-Fehler:', err);
      setError(err.message || 'Registrierung fehlgeschlagen.');
      toast.error('Registrierung fehlgeschlagen.');
    }
  }, [formData, validateEmail, login, navigate, toast]);

  return (
    <section className="max-w-xl mx-auto mt-12 p-6 bg-[#DCDEF2] rounded-xl shadow-lg border border-[#A67C7C]">
      <h2 className="text-2xl font-bold text-[#260101] mb-6 text-center">
        Registrieren
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* E-Mail */}
        <div>
          <label htmlFor="email" className="block font-medium text-[#260101]">
            E-Mail <sup className="text-red-500">*</sup>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="dein@email.de"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
            required
          />
        </div>

        {/* Passwort */}
        <div>
          <label htmlFor="passwort" className="block font-medium text-[#260101]">
            Passwort <sup className="text-red-500">*</sup>
          </label>
          <input
            id="passwort"
            name="passwort"
            type="password"
            value={formData.passwort}
            onChange={handleInputChange}
            placeholder="Mindestens 8 Zeichen"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
            required
          />
        </div>

        {/* Passwort wiederholen */}
        <div>
          <label htmlFor="passwortWdh" className="block font-medium text-[#260101]">
            Passwort wiederholen <sup className="text-red-500">*</sup>
          </label>
          <input
            id="passwortWdh"
            name="passwortWdh"
            type="password"
            value={formData.passwortWdh}
            onChange={handleInputChange}
            placeholder="Nochmals eingeben"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
            required
          />
        </div>

        {/* Feedback-Messages */}
        {error && <p className="text-red-600 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        {/* Absenden */}
        <button
          type="submit"
          className="w-full bg-[#8C5A67] text-white py-2 px-4 rounded-md hover:bg-[#A67C7C] transition"
          disabled={!formData.email || !formData.passwort}
        >
          Registrieren
        </button>
      </form>

      <p className="text-center mt-4 text-[#260101]">
        Schon ein Konto?{' '}
        <Link to="/login" className="text-[#8C5A67] hover:underline">
          Hier einloggen
        </Link>
      </p>
    </section>
  );
}
