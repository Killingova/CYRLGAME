// 📂 src/pages/ProfilePage.jsx
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { supabase } from "../supabaseClient";
import AvatarUploader from "../components/profile/AvatarUploader";
import LoadingSpinner from "../components/profile/LoadingSpinner";
import MessageAlert from "../components/profile/MessageAlert";
import SaveButton from "../components/profile/SaveButton";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({ display_name: "", birthdate: "", avatar_image_url: "" });
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Load profile
  useEffect(() => {
    if (!user) return;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("user_profiles")
        .select("display_name, birthdate, avatar_image_url")
        .eq("user_id", user.id)
        .single();
      setLoading(false);
      if (error) return console.error("Error loading profile:", error);
      setProfile({
        display_name: data.display_name || "",
        birthdate: data.birthdate || "",
        avatar_image_url: data.avatar_image_url || ""
      });
    })();
  }, [user]);

  const handleSave = async () => {
    setLoading(true);
    let avatar_url = profile.avatar_image_url;

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
      display_name: profile.display_name,
      birthdate: profile.birthdate,
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
      setProfile(prev => ({ ...prev, avatar_image_url: avatar_url }));
    }
    setLoading(false);
  };

  return (
    <section className="flex justify-center my-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Dein Profil</h2>
        {loading ? (
          <div className="flex justify-center py-10">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="space-y-6">
            <AvatarUploader url={profile.avatar_image_url} onFileSelect={setAvatarFile} />

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Anzeigename</label>
                <input
                  type="text"
                  value={profile.display_name}
                  onChange={e => setProfile(prev => ({ ...prev, display_name: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Geburtstag</label>
                <input
                  type="date"
                  value={profile.birthdate}
                  onChange={e => setProfile(prev => ({ ...prev, birthdate: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
                />
              </div>
            </div>

            {message && <MessageAlert message={message} />}

            <div className="flex justify-end">
              <SaveButton loading={loading} onClick={handleSave} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
