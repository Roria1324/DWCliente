import React, { createContext, useState } from "react";
import useSupabase from "../hooks/useSupabase";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { getData, getItem, editTable } = useSupabase();
  const [profile, setProfile] = useState({});

  const TABLE = "perfiles";

  const getProfile = async () => {
    const data = await getData(TABLE);
    setProfile(data || []);
  };

  const getProfileById = async (id) => {
    const data = await getItem(TABLE, "id", id);
    setProfile(data?.[0] || []);
  };

  const editProfile = async (id, input) => {
    await editTable(TABLE, input, "id", id);
    await getProfileById(id)
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
