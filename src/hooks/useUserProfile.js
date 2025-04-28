import { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

export function useUserProfile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({
    display_name: "",
    birthdate: "",
    avatar_image_url: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Load profile
  useEffect(() => {
    const fetch = async () => {
      if (!user) { setLoading(false); return; }
      const { data, error: err } = await supabase
        .from("user_profiles")
        .select("display_name,birthdate,avatar_image_url")
        .eq("user_id", user.id)
        .single();
      if (err && err.code !== "PGRST116") setError("Profil konnte nicht geladen werden.");
      else if (data) setProfile(data);
      setLoading(false);
    };
    fetch();
  }, [user]);

  // File upload
  const uploadAvatar = useCallback(async file => {
    if (!user) return;
    setSaving(true); setError(""); setMessage("");
    const path = `${user.id}/${file.name}`;
    const { error: upErr } = await supabase.storage.from("avatars").upload(path, file, { upsert: true });
    if (upErr) { setError("Upload fehlgeschlagen."); setSaving(false); return; }
    const { publicURL, error: urlErr } = supabase.storage.from("avatars").getPublicUrl(path);
    if (urlErr) { setError("URL konnte nicht geladen werden."); setSaving(false); return; }
    setProfile(p => ({ ...p, avatar_image_url: publicURL })); setSaving(false);
  }, [user]);

  // Change field
  const setField = useCallback((field, value) => {
    setProfile(p => ({ ...p, [field]: value }));
  }, []);

  // Save profile
  const saveProfile = useCallback(async () => {
    if (!user) return;
    setSaving(true); setError(""); setMessage("");
    const { error: saveErr } = await supabase
      .from("user_profiles")
      .upsert({ user_id: user.id, ...profile });
    if (saveErr) setError("Speichern fehlgeschlagen.");
    else setMessage("Profil gespeichert!");
    setSaving(false);
  }, [user, profile]);

  return {
    profile,
    loading,
    saving,
    message,
    error,
    uploadAvatar,
    setField,
    saveProfile
  };
}
