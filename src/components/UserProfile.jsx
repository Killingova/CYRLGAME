import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../supabaseClient';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({
    display_name: '',
    birthdate: '',
    avatar_image_url: '',
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (data) setProfile(data);
      setLoading(false);
    };

    if (user) fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('user_profiles').upsert({
      user_id: user.id,
      ...profile,
    });

    setMessage(error ? error.message : 'Profil aktualisiert!');
    setLoading(false);
  };

  if (loading) return <p>Lädt...</p>;

  return (
    <section className="max-w-lg mx-auto p-6 bg-[#DCDEF2] rounded-xl shadow">
      <h2 className="text-2xl font-bold text-[#260101] mb-4">Dein Profil</h2>

      {message && <p className="text-sm text-green-500">{message}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#260101]">Name:</label>
          <input
            className="w-full p-2 border rounded"
            name="display_name"
            value={profile.display_name || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-[#260101]">Geburtsdatum:</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            name="birthdate"
            value={profile.birthdate || ''}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-[#260101]">Avatar URL:</label>
          <input
            className="w-full p-2 border rounded"
            name="avatar_image_url"
            value={profile.avatar_image_url || ''}
            onChange={handleChange}
          />
        </div>

        <button className="w-full py-2 bg-[#8C5A67] text-white rounded">
          Speichern
        </button>
      </form>
    </section>
  );
};

export default UserProfile;
