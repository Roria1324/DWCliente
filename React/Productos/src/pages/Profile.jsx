import React, { useEffect, useState } from "react";
import useProfile from "../hooks/useProfile";
import useSession from "../hooks/useSession";
import "./Profile.css";

const Profile = () => {
  const { getProfileById, editProfile, profile } = useProfile();
  const { user } = useSession();

  const [confirmProfile, setConfirmProfile] = useState(false);
  const [formData, setFormData] = useState({
    avatar_url:"",
    full_name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await editProfile(user.id, formData);
    setConfirmProfile(false);
  };

  useEffect(() => {
    if (!user.id) return;

    getProfileById(user?.id);
  }, [user]);

  useEffect(() => {
    if (!profile) return;

    setFormData({
      avatar_url:
        profile.avatar_url ||
        "https://i.pinimg.com/736x/fb/d8/7a/fbd87a446811fbb05f82af98c37d678b.jpg", //Imagen predefinida por si el usuario no sube nada o borra su imagen sin darse cuenta.
      full_name: profile.full_name || "",
      description: profile.description || "",
    });
  }, [profile]);

  return (
    <div className="profile-container">
      <h1 className="profile-title">{profile.full_name}'s profile</h1>
      {user?.id === profile?.id && (
        <>
          <div className="profile-content">
            <div className="avatar-section">
              {!confirmProfile ? (
                <img
                  className="image-profile"
                  src={
                    confirmProfile ? formData.avatar_url : profile.avatar_url
                  }
                  alt={`${formData.full_name} photo`}
                />
              ) : (
                <>
                  <label htmlFor="input-avatar_url">Avatar URL</label>
                  <input
                    id="profile-avatar_url"
                    type="text"
                    name="avatar_url"
                    value={formData.avatar_url}
                    onChange={handleChange}
                    disabled={!confirmProfile}
                  />
                </>
              )}
            </div>
            <div className="my-profile">
              <label htmlFor="profile-name">Name</label>
              <input
                id="profile-name"
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                disabled={!confirmProfile}
                autoFocus
              />

              <label htmlFor="profile-email">Email</label>
              <input
                id="profile-email"
                type="email"
                name="email"
                value={profile.email}
                disabled
              />

              <label htmlFor="profile-description">About Yourself</label>
              <textarea
                id="profile-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                disabled={!confirmProfile}
              />

              {!confirmProfile ? (
                <button
                  className="button-menu"
                  onClick={() => setConfirmProfile(true)}
                >
                  Edit
                </button>
              ) : (
                <button className="button-menu" onClick={handleSave}>
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
