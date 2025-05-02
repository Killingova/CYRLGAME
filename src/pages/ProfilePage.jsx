// 📁 src/pages/ProfilePage.jsx
import React, { Fragment, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useUserProfile }   from '../hooks/useUserProfile';
import { useWarnIfUnsaved } from '../hooks/useWarnIfUnsaved';
import ProfileLayout        from '../components/profile/ProfileLayout';
import AvatarUploader       from '../components/profile/AvatarUploader';
import ProfileForm          from '../components/profile/ProfileForm';
import SaveButton           from '../components/profile/SaveButton';
import LoadingSpinner       from '../components/profile/LoadingSpinner';

export default function ProfilePage() {
  const {
    profile,
    loading,
    saving,
    dirty,
    error,
    uploadAvatar,
    setField,
    saveProfile,
  } = useUserProfile();

  // Warnung wenn Nutzer die Seite mit ungespeicherten Änderungen verlässt
  useWarnIfUnsaved(dirty);

  // Debug: Log, wenn Profil vollständig geladen wurde
  useEffect(() => {
    if (!loading) {
      console.debug('[ProfilePage] Profil geladen:', profile);
    }
  }, [loading, profile]);

  // Early return: Lade-Zustand
  if (loading) {
    return (
      <ProfileLayout title="Lade Profil…">
        <LoadingSpinner />
      </ProfileLayout>
    );
  }

  return (
    <Fragment>
      {/** Toast-Container für Success/Error */}
      <Toaster position="top-right" reverseOrder={false} />

      <ProfileLayout title="Dein Profil">
        {/** Avatar-Upload */}
        <AvatarUploader
          url={profile.avatar_image_url}
          onFileSelect={(file) => {
            console.debug('[ProfilePage] Avatar ausgewählt:', file.name);
            uploadAvatar(file);
          }}
        />

        {/** Display Name & Geburtstag */}
        <ProfileForm
          display_name={profile.display_name}
          birthdate={profile.birthdate}
          onChange={(field, value) => {
            console.debug('[ProfilePage] Feld geändert:', field, value);
            setField(field, value);
          }}
        />

        {/** Fehler anzeigen, falls etwas schiefgeht */}
        {error && (
          <div className="mt-2 text-center text-red-600 font-medium">
            {error}
          </div>
        )}

        {/** Speichern-Button */}
        <div className="flex justify-end mt-4">
          <SaveButton
            loading={saving}
            onClick={() => {
              console.debug('[ProfilePage] Speichern ausgelöst');
              saveProfile();
            }}
          >
            Profil speichern
          </SaveButton>
        </div>
      </ProfileLayout>
    </Fragment>
  );
}
