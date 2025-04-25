// --- src/components/profile/ProfileForm.jsx ---
import React from 'react';

export default function ProfileForm({ display_name, birthdate, onChange }) {
  return (
    <>
      <div>
        <label className="block font-medium">Display Name</label>
        <input
          type="text"
          value={display_name}
          onChange={e => onChange('display_name', e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Birthday</label>
        <input
          type="date"
          value={birthdate}
          onChange={e => onChange('birthdate', e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded"
        />
      </div>
    </>
  );
}