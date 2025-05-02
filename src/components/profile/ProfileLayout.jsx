// 📁 src/components/profile/ProfileLayout.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * ProfileLayout: Umfasst den Profil-Content in einer Card-Komponente.
 * Nutzt das Children-Pattern für maximale Wiederverwendbarkeit.
 * Zeigt einen Titel und beliebigen Inhalt an.
 *
 * @param {object} props
 * @param {string} props.title     - Überschrift der Card
 * @param {React.ReactNode} props.children - Inhalt (z.B. Formular, Avatar)
 */
export default function ProfileLayout({ title, children }) {
  // Debug: Komponent-Mount und Title
  useEffect(() => {
    console.debug('[ProfileLayout] gerendert mit Titel:', title);
  }, [title]);

  return (
    <section
      className={
        `
        max-w-lg mx-auto mt-12 p-6
        bg-[#DCDEF2] rounded-xl shadow-lg border border-[#A67C7C]
        `
      }
      role="region"
      aria-labelledby="profile-layout-title"
    >
      <h2
        id="profile-layout-title"
        className="text-2xl font-bold text-[#260101] mb-6 text-center"
      >
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}

// PropTypes für Validierung der Props
ProfileLayout.propTypes = {
  title:    PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
