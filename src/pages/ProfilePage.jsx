// 📂 src/pages/ProfilePage.jsx
import React, { useReducer, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

// Initial State & Reducer für Formular-State
const initialState = {
  display_name: "",
  birthdate: "",
  avatar_url: "",
  avatarFile: null,
  loading: true,
  message: "",
  changed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_START":
      return { ...state, loading: true };
    case "LOAD_SUCCESS":
      return { ...state, ...action.payload, loading: false };
    case "FIELD_CHANGE":
      return { ...state, [action.field]: action.value, changed: true };
    case "AVATAR_SELECT":
      return { ...state, avatarFile: action.file, changed: true };
    case "SAVE_START":
      return { ...state, loading: true };
    case "SAVE_SUCCESS":
      return { ...state, ...action.payload, loading: false, message: action.message, changed: false };
    case "SAVE_ERROR":
      return { ...state, loading: false, message: action.message };
    case "RESET":
      return { ...state, changed: false, message: "" };
    default:
      return state;
  }
}

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Laden
  useEffect(() => {
    if (!user) return;
    dispatch({ type: "LOAD_START" });
    supabase
      .from("user_profiles")
      .select("display_name, birthdate, avatar_image_url")
      .eq("user_id", user.id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          dispatch({ type: "SAVE_ERROR", message: "Profil konnte nicht geladen werden." });
        } else {
          dispatch({
            type: "LOAD_SUCCESS",
            payload: {
              display_name: data.display_name || "",
              birthdate: data.birthdate || "",
              avatar_url: data.avatar_image_url || "",
            },
          });
        }
      });
  }, [user]);

  // Speichern
  const handleSave = async () => {
    dispatch({ type: "SAVE_START" });

    let avatar_url = state.avatar_url;
    if (state.avatarFile) {
      const ext = state.avatarFile.name.split(".").pop();
      const fileName = `${user.id}.${ext}`;
      const { error: upErr } = await supabase
        .storage.from("avatars")
        .upload(fileName, state.avatarFile, { upsert: true });
      if (upErr) {
        return dispatch({ type: "SAVE_ERROR", message: "Avatar-Upload fehlgeschlagen." });
      }
      avatar_url = `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/avatars/${fileName}`;
    }

    const updates = {
      user_id: user.id,
      display_name: state.display_name,
      birthdate: state.birthdate,
      avatar_image_url: avatar_url,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("user_profiles").upsert(updates, { returning: "minimal" });
    if (error) {
      dispatch({ type: "SAVE_ERROR", message: "Profil konnte nicht gespeichert werden." });
    } else {
      dispatch({ type: "SAVE_SUCCESS", payload: { avatar_url }, message: "Profil gespeichert!" });
    }
  };

  // Abbrechen = zurück zur Home
  const handleCancel = () => navigate("/");

  return (
    <main id="profile" className="bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] min-h-screen py-12 px-4">
      <div className="max-w-lg md:max-w-2xl mx-auto bg-white dark:bg-[#260101] rounded-2xl shadow-xl p-8 grid gap-6">
        <h1 className="text-3xl font-bold text-center text-[#260101] dark:text-[#DCDEF2]">Dein Profil</h1>
        <hr className="border-t border-[#8C5A67]/30" />

        {/* Avatar Uploader */}
        <div className="flex flex-col items-center">
          <label htmlFor="avatar" className="font-medium mb-2 text-[#260101] dark:text-[#DCDEF2]">
            Profilbild
          </label>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#A67C7C]/40 hover:border-[#8C5A67] transition-colors">
            {state.avatar_url && !state.avatarFile ? (
              <img
                src={state.avatar_url}
                alt="Avatar"
                className="object-cover w-full h-full"
              />
            ) : state.avatarFile ? (
              <img
                src={URL.createObjectURL(state.avatarFile)}
                alt="Avatar Vorschau"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="flex items-center justify-center w-full h-full text-gray-400">
                Bild hochladen
              </span>
            )}
            <input
              id="avatar"
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => dispatch({ type: "AVATAR_SELECT", file: e.target.files[0] })}
            />
          </div>
        </div>

        {/* Formular */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="displayName" className="block font-medium text-[#260101] dark:text-[#DCDEF2]">
              Anzeigename
            </label>
            <input
              id="displayName"
              type="text"
              value={state.display_name}
              onChange={(e) =>
                dispatch({ type: "FIELD_CHANGE", field: "display_name", value: e.target.value })
              }
              placeholder="z. B. Kristin Zhivkova"
              className="w-full px-4 py-2 mt-1 border border-[#A67C7C] rounded-lg bg-[#FCFCFC] focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
              required
              minLength={3}
            />
            <p className="text-xs text-gray-500 mt-1">Dieser Name erscheint in deinen Numerologie-Ergebnissen.</p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label htmlFor="birthdate" className="block font-medium text-[#260101] dark:text-[#DCDEF2]">
              Geburtstag
            </label>
            <input
              id="birthdate"
              type="date"
              value={state.birthdate}
              onChange={(e) =>
                dispatch({ type: "FIELD_CHANGE", field: "birthdate", value: e.target.value })
              }
              className="w-full px-4 py-2 mt-1 border border-[#A67C7C] rounded-lg bg-[#FCFCFC] focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
              required
              max={new Date().toISOString().split("T")[0]}
            />
            <p className="text-xs text-gray-500 mt-1">
              Dein Geburtsdatum hilft bei personalisierten Berechnungen.
            </p>
          </div>
        </form>

        {/* Inline-Alert */}
        {state.message && (
          <div
            role="alert"
            aria-live="assertive"
            className="text-green-600 font-medium text-center"
          >
            {state.message}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-[#260101] rounded-lg transition"
          >
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            disabled={state.loading || !state.changed}
            className={`px-6 py-2 rounded-lg text-white transition
              ${state.changed ? "bg-[#8C5A67] hover:bg-[#A67C7C]" : "bg-[#8C5A67]/50 cursor-not-allowed"}`}
          >
            {state.loading ? "Speichern…" : "Save Profile"}
          </button>
        </div>
      </div>
    </main>
  );
}
