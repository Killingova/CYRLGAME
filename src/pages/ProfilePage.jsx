// 📂 src/pages/ProfilePage.jsx
import React from "react";
import { useUserProfile } from "../hooks/useUserProfile";
import ProfileLayout from "../components/profile/ProfileLayout";
import AvatarUploader from "../components/profile/AvatarUploader";
import ProfileForm from "../components/profile/ProfileForm";
import SaveButton from "../components/profile/SaveButton";
import LoadingSpinner from "../components/profile/LoadingSpinner";
import MessageAlert from "../components/profile/MessageAlert";

export default function ProfilePage() {
  const {
    profile,
    loading,
    saving,
    message,
    error,
    uploadAvatar,
    setField,
    saveProfile
  } = useUserProfile();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileLayout title="Dein Profil">
      {/* Avatar */}
      <AvatarUploader
        url={profile.avatar_image_url}
        onFileSelect={uploadAvatar}
      />

      {/* Name & Geburtstag */}
      <ProfileForm
        display_name={profile.display_name}
        birthdate={profile.birthdate}
        onChange={setField}
      />

      {/* Feedback */}
      {error && <div className="text-red-600">{error}</div>}
      {message && <MessageAlert message={message} />}

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <SaveButton loading={saving} onClick={saveProfile}>
          Profil speichern
        </SaveButton>
      </div>
    </ProfileLayout>
  );
}
