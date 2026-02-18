import React, { useEffect } from "react";
import useProfile from "../hooks/useProfile";
import useSession from "../hooks/useSession";

const Profile = () => {
  const { getProfile, getProfileById, editProfile, profile } = useProfile();
  const { isAdmin } = useSession();

  useEffect(() => {
    if (isAdmin) {
      getProfile();
    } else {
      getProfileById();
    }
  }, []);

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your profile</h1>

      {profile.avatar_url && (
        <img
          className="image-profile"
          src={profile.avatar_url}
          alt={`${profile.full_name}'s profile`}
        />
      )}

      <div className="my-profile">
        <label htmlFor="profile-name">Name</label>
        <input
          id="profile-name"
          type="text"
          value={profile.full_name || ""}
          readOnly
        />

        <label htmlFor="profile-email">Email</label>
        <input
          id="profile-email"
          type="email"
          value={profile.email || ""}
          readOnly
        />

        <label htmlFor="profile-description">About Yourself</label>

        <textarea
          id="profile-description"
          value={profile.description || ""}
          readOnly
        />
      </div>
    </div>
  );
};

export default Profile;
