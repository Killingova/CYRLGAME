// 📂 src/pages/ProfilePage.jsx
import React, { useState, useEffect, useContext, useReducer } from "react";
import { AuthContext } from "../context/AuthContext";
import { supabase } from "../supabaseClient";
import AvatarUploader from "../components/profile/AvatarUploader";
import LoadingSpinner from "../components/profile/LoadingSpinner";
import MessageAlert from "../components/profile/MessageAlert";
import SaveButton from "../components/profile/SaveButton";

// Reducer & initial state for form + change-tracking
const initialState = { display_name: "", birthdate: "", avatar_image_url: "", hasChanged: false };
function profileReducer(state, action) {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, ...action.payload };
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value, hasChanged: true };
    case 'RESET_CHANGED':
      return { ...state, hasChanged: false };
    default:
      return state;
  }
}

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Load profile on mount
  useEffect(() => {
    if (!user) return;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("user_profiles")
        .select("display_name, birthdate, avatar_image_url")
        .eq("user_id", user.id)
        .single();
      if (error) {
        console.error("Profile load failed:", error);
      } else {
        dispatch({ type: 'SET_PROFILE', payload: {
          display_name: data.display_name || "",
          birthdate: data.birthdate || "",
          avatar_image_url: data.avatar_image_url || ""
        }});
        dispatch({ type: 'RESET_CHANGED' });
      }
      setLoading(false);
    })();
  }, [user]);

  const handleSave = async () => {
    setLoading(true);
    let avatar_url = state.avatar_image_url;

    if (avatarFile) {
      const ext = avatarFile.name.split('.').pop();
      const fileName = `${user.id}.${ext}`;
      const { error: uploadError } = await supabase
        .storage
        .from('avatars')
        .upload(fileName, avatarFile, { upsert: true });
      if (uploadError) {
        setMessage("Avatar upload failed.");
        setLoading(false);
        return;
      }
      avatar_url = `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/avatars/${fileName}`;
    }

    const updates = {
      user_id: user.id,
      display_name: state.display_name,
      birthdate: state.birthdate,
      avatar_image_url: avatar_url,
      updated_at: new Date()
    };
    const { error } = await supabase
      .from("user_profiles")
      .upsert(updates, { returning: 'minimal' });

    if (error) {
      setMessage("Profile save failed.");
    } else {
      setMessage("Profile updated successfully!");
      dispatch({ type: 'SET_PROFILE', payload: { avatar_image_url: avatar_url } });
      dispatch({ type: 'RESET_CHANGED' });
    }
    setLoading(false);
  };

  return (
    <main id="profile" className="flex justify-center my-12 px-4">
      <div className="w-full max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-lg p-8 dark:bg-[#260101] dark:text-[#DCDEF2]">
        <h1 className="text-2xl font-bold mb-4 text-center">Dein Profil</h1>
        <hr className="my-6 border-t border-dashed border-[#A67C7C]/30" />

        {loading ? (
          <div className="flex justify-center py-10">
            <LoadingSpinner />
          </div>
        ) : (
          <form className="space-y-6">
            <AvatarUploader
              url={state.avatar_image_url}
              onFileSelect={file => { setAvatarFile(file); dispatch({ type: 'UPDATE_FIELD', field: 'avatar_image_url', value: state.avatar_image_url }); }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="displayName" className="block text-sm font-semibold mb-1">Anzeigename</label>
                <input
                  id="displayName"
                  type="text"
                  value={state.display_name}
                  onChange={e => dispatch({ type: 'UPDATE_FIELD', field: 'display_name', value: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
                  minLength={3}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Dieser Name erscheint in deinen Nummerologie.</p>
              </div>

              <div>
                <label htmlFor="birthday" className="block text-sm font-semibold mb-1">Geburtstag</label>
                <input
                  id="birthday"
                  type="date"
                  value={state.birthdate}
                  onChange={e => dispatch({ type: 'UPDATE_FIELD', field: 'birthdate', value: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
                  max={new Date().toISOString().split('T')[0]}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Dein Geburtsdatum hilft bei Personalisierten Berechnungen.</p>
              </div>
            </div>

            {message && (
              <div role="alert" aria-live="assertive">
                <MessageAlert message={message} />
              </div>
            )}

            <div className="flex justify-end space-x-3">
              <button
                type="reset"
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >Abbrechen</button>
              <SaveButton
                loading={loading}
                onClick={handleSave}
                disabled={!state.hasChanged}
              />
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
