// 📁 src/components/profile/SaveButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * SaveButton: Ein Button für das Speichern von Daten.
 * Zeigt einen Ladezustand, deaktiviert sich selbst und sendet Debug-Logs.
 * 
 * @param {object} props
 * @param {boolean} props.loading - true während des Speichervorgangs
 * @param {() => void} props.onClick - Callback beim Klicken
 * @param {React.ReactNode} props.children - Button-Beschriftung
 */
export default function SaveButton({ loading, onClick, children }) {
  const handleClick = () => {
    console.debug('[SaveButton] Klick ausgelöst');
    onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
      className={
        `
        inline-flex items-center justify-center
        bg-[#8C5A67] text-white font-medium
        py-2 px-4 rounded-lg shadow-sm
        transition-colors duration-150 ease-in-out
        hover:bg-[#A67C7C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A67C7C]
        disabled:opacity-50 disabled:cursor-not-allowed
        `
      }
    >
      {loading 
        ? (
          <>
            <svg 
              className="animate-spin h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Speichert…
          </>
        )
        : children
      }
    </button>
  );
}

SaveButton.propTypes = {
  loading:  PropTypes.bool,
  onClick:  PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

SaveButton.defaultProps = {
  loading: false
};
