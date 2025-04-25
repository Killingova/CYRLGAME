// --- src/components/profile/SaveButton.jsx ---
import React from 'react';

export default function SaveButton({ loading, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="bg-[#8C5A67] text-white py-2 px-4 rounded hover:bg-[#A67C7C] transition"
    >
      {loading ? 'Saving…' : 'Save Profile'}
    </button>
  );
}
