import React, { useEffect, useState } from "react";
import useSession from "../hooks/useSession";
import useSupabase from "../hooks/useSupabase";
import "./EditRol.css"

const EditRol = () => {
  const { editTable } = useSupabase();
  const { loadAsignatedRoles, users} = useSession();
  const [data, setData] = useState([]);

  const TABLE = "roles";

  const handleChange = (id, newRole) => {
    setData((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, rol: newRole } : user,
      ),
    );
  };
  const handleSave = async (id, rol) => {
    await editTable(TABLE, { rol }, "id", id);
  };

  useEffect(() => {
    loadAsignatedRoles();
  }, []);

  return (
    <div className="roles-container">
      <h2 className="roles-title">Role Management</h2>

      <table className="roles-table">
        <thead>
          <tr>
            <th>User Email</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="roles-row">
              <td className="roles-email">{user.perfiles?.email}</td>

              <td>
                <select
                  className="roles-select"
                  value={user.rol}
                  onChange={(e) => handleChange(user.id, e.target.value)}
                >
                  <option value="usuario">User</option>
                  <option value="administrador">Administrator</option>
                </select>
              </td>

              <td>
                <button
                  className="roles-button"
                  onClick={() => handleSave(user.id, user.rol)}
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditRol;
