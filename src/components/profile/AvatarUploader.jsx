// --- src/components/profile/AvatarUploader.jsx ---
import React from 'react';

export default function AvatarUploader({ url, onFileSelect }) {
  return (
    <div>
      <label className="block font-medium">Profile Picture</label>
      {url && <img src={url} alt="Avatar" className="w-24 h-24 rounded-full mb-2 object-cover" />}
      <input
        type="file"
        accept="image/*"
        onChange={e => onFileSelect(e.target.files[0])}
        className="mt-1"
      />
    </div>
  );
}
