// --- src/components/profile/MessageAlert.jsx ---
import React from 'react';

export default function MessageAlert({ message }) {
  return (
    <p className="text-green-600 font-medium">{message}</p>
  );
}