// 📁 src/components/profile/ProfileForm.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ProfileForm: Formular für Vorname, Nachname & Geburtstag.
 * @param {object} props
 * @param {string} props.first_name - Vorname des Nutzers
 * @param {string} props.last_name - Nachname des Nutzers
 * @param {string} props.birthdate - Geburtsdatum im Format YYYY-MM-DD
 * @param {function} props.onChange - Callback für Feldänderungen (field, value)
 */
export default function ProfileForm({ first_name, last_name, birthdate, onChange }) {
  return (
    <div className="space-y-4">
      {/* Vorname */}
      <div>
        <label htmlFor="first_name" className="block font-medium">Vorname</label>
        <input
          id="first_name"
          name="first_name"
          type="text"
          value={first_name}
          onChange={e => onChange('first_name', e.target.value)}
          className="w-full px-3 py-2 border rounded focus:ring"
        />
      </div>

      {/* Nachname */}
      <div>
        <label htmlFor="last_name" className="block font-medium">Nachname</label>
        <input
          id="last_name"
          name="last_name"
          type="text"
          value={last_name}
          onChange={e => onChange('last_name', e.target.value)}
          className="w-full px-3 py-2 border rounded focus:ring"
        />
      </div>

      {/* Geburtstag */}
      <div>
        <label htmlFor="birthdate" className="block font-medium">Geburtstag</label>
        <input
          id="birthdate"
          name="birthdate"
          type="date"
          value={birthdate}
          onChange={e => onChange('birthdate', e.target.value)}
          className="w-full px-3 py-2 border rounded focus:ring"
        />
      </div>
    </div>
  );
}

ProfileForm.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name:  PropTypes.string.isRequired,
  birthdate:  PropTypes.string.isRequired,
  onChange:   PropTypes.func.isRequired
};
