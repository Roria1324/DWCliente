import React, { useEffect } from "react";
import useProfile from "../hooks/useProfile";
import useSession from "../hooks/useSession";
import "./Profile.css";

const Profile = () => {
  const { getProfile, getProfileById, editProfile, profile } = useProfile();
  const { isAdmin, user } = useSession();

  const handleSave = async () => {};

  useEffect(() => {
    if (!user.id) getProfileById(user.id);
  }, [user]);

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your profile</h1>
      {profile.map((prof) => (
        <>
          <img
            className="image-profile" b
            src={prof.avatar_url}
            alt={`${prof.full_name} photo`}
          />

          <div className="my-profile">
            <label htmlFor="profile-name">Name</label>
            <input
              id="profile-name"
              type="text"
              value={prof.full_name}
    
            />

            <label htmlFor="profile-email">Email</label>
            <input
              id="profile-email"
              type="email"
              value={prof.email}

            />

            <label htmlFor="profile-description">About Yourself</label>

            <textarea
              id="profile-description"
              value={prof.description}
   
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Profile;
