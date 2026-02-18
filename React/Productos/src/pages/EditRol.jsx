import React, { useEffect, useState } from "react";
import useSession from "../hooks/useSession";
import useSupabase from "../hooks/useSupabase";
import "./EditRol.css";

const EditRol = () => {
  const { editTable } = useSupabase();
  const { loadAsignatedRoles, users, setUsers, user } = useSession();
  const [confirm, setConfirm] = useState(null);

  const TABLE = "roles";

  const handleChange = (id, newRole) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, rol: newRole } : user)),
    );
  };
  const handleSave = async (id, rol) => {
    const result = await editTable(TABLE, { rol }, "id", id);

    if (result !== undefined) {
      setConfirm(id);

      setTimeout(() => {
        setConfirm(null);
      }, 2000);
    }
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
          {users.map((us) => (
            <tr key={us.id} className="roles-row">
              <td className="roles-email">{us.perfiles?.email}</td>

              <td>
                <select
                  className="roles-select"
                  value={us.rol}
                  disabled={us.id === user.id}
                  onChange={(e) => handleChange(us.id, e.target.value)}
                >
                  <option value="usuario">User</option>
                  <option value="administrador">Administrator</option>
                </select>
              </td>

              <td>
                {us.id === user.id ? (
                  <span className="menu-button">Protected</span>
                ) : confirm === us.id ? (
                  <span className="saved-button">Saved</span>
                ) : (
                  <button
                    className="menu-button"
                    onClick={() => handleSave(us.id, us.rol)}
                  >
                    Save
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditRol;
