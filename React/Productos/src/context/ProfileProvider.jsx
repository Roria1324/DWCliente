import React, { createContext, useState } from "react";
import useSupabase from "../hooks/useSupabase";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { getData, getItem, editTable } = useSupabase();
  const [profile, setProfile] = useState([]);

  const TABLE = "perfiles";

  const getProfile = async () => {
    const data = await getData(TABLE);
    setProfile(data || []);
  };

  const getProfileById = async () => {
    const data = await getItem(TABLE, "id", id);
    setProfile(data || []);
  };

  const editProfile = async () => {
    const data = await editTable(TABLE, "id", id);
    setProfile(data || []);
  };

  const elements = {
    getProfile,
    getProfileById,
    editProfile,
    profile,
    setProfile,
  };

  return (
    <ProfileContext.Provider value={elements}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
export { ProfileContext };
