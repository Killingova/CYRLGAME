// 📁 src/hooks/useUserProfile.js
import { useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../supabaseClient';
import { useToast } from './useToast';

/**
 * useUserProfile: Verwaltet das Laden, Ändern und Speichern des Nutzerprofils.
 * Nutzt die 'profiles'-Tabelle im 3NF-Schema mit atomaren first_name und last_name.
 */
export function useUserProfile() {
  const { user } = useContext(AuthContext);
  const toast    = useToast();

  const [profile, setProfile] = useState({
    first_name:        '',
    last_name:         '',
    birthdate:         '',
    avatar_image_url:  ''
  });
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);
  const [dirty,   setDirty]   = useState(false);
  const [error,   setError]   = useState('');

  // 1) Profil laden
  useEffect(() => {
    async function fetchProfile() {
      if (!user) {
        setLoading(false);
        return;
      }
      console.debug('[useUserProfile] Lade Profil für User-ID:', user.id);
      try {
        const { data, error: fetchError } = await supabase
          .from('profiles')
          .select('first_name, last_name, birthday, avatar_url')
          .eq('user_id', user.id)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
          console.error('[useUserProfile] Lade-Fehler:', fetchError);
          setError('Profil konnte nicht geladen werden.');
        } else if (data) {
          setProfile({
            first_name:       data.first_name  || '',
            last_name:        data.last_name   || '',
            birthdate:        data.birthday    || '',
            avatar_image_url: data.avatar_url  || ''
          });
        }
      } catch (err) {
        console.error('[useUserProfile] Unerwarteter Fehler:', err);
        setError('Unbekannter Fehler beim Laden.');
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [user]);

  // 2) Avatar hochladen
  const uploadAvatar = useCallback(async file => {
    if (!user) return;
    setSaving(true); setError('');
    try {
      const ext = file.name.split('.').pop();
      const fileName = `${user.id}.${ext}`;
      const { error: uploadErr } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, { upsert: true });
      if (uploadErr) throw uploadErr;

      const { publicURL, error: urlErr } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);
      if (urlErr) throw urlErr;

      setProfile(p => ({ ...p, avatar_image_url: publicURL }));
      setDirty(true);
      toast.success('Avatar hochgeladen.');
    } catch (err) {
      console.error('[useUserProfile] Avatar Upload:', err);
      setError('Avatar-Upload fehlgeschlagen.');
      toast.error('Upload fehlgeschlagen.');
    } finally {
      setSaving(false);
    }
  }, [user, toast]);

  // 3) Feldänderung merken
  const setField = useCallback((field, value) => {
    setProfile(p => ({ ...p, [field]: value }));
    setDirty(true);
  }, []);

  // 4) Profil speichern
  const saveProfile = useCallback(async () => {
    if (!user) return;
    setSaving(true); setError('');
    try {
      const upsertData = {
        user_id:     user.id,
        first_name:  profile.first_name,
        last_name:   profile.last_name,
        birthday:    profile.birthdate,
        avatar_url:  profile.avatar_image_url
      };
      const { error: saveErr } = await supabase
        .from('profiles')
        .upsert(upsertData, { returning: 'minimal' });
      if (saveErr) throw saveErr;

      toast.success('Profil gespeichert.');
      setDirty(false);
    } catch (err) {
      console.error('[useUserProfile] Speichern:', err);
      setError('Fehler beim Speichern.');
      toast.error('Speichern fehlgeschlagen.');
    } finally {
      setSaving(false);
    }
  }, [user, profile, toast]);

  return {
    profile,
    loading,
    saving,
    dirty,
    error,
    uploadAvatar,
    setField,
    saveProfile
  };
}