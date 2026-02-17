import React, { useEffect, useState } from "react";
import useSession from "../hooks/useSession";
import useSupabase from "../hooks/useSupabase";
import "./EditRol.css"

const EditRol = () => {
  const { fetchTable, editTable } = useSupabase();
  const { isAdmin } = useSession();
  const [users, setUsers] = useState([]);

  const TABLE = "roles";

  const loadRoles = async () => {
    const data = await fetchTable(TABLE, { column: "created_at" });
    if (data) setUsers(data);
  };

  const handleChange = (id, newRole) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id_rol === id ? { ...user, rol: newRole } : user,
      ),
    );
  };
  const handleSave = async (id, rol) => {
    await editTable(TABLE, { rol }, "id_rol", id);
  };

  useEffect(() => {
    loadRoles();
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
          {users.map((user) => (
            <tr key={user.id_rol} className="roles-row">
              <td className="roles-email">{user.email}</td>

              <td>
                <select
                  className="roles-select"
                  value={user.rol}
                  onChange={(e) => handleChange(user.id_rol, e.target.value)}
                >
                  <option value="usuario">User</option>
                  <option value="administrador">Administrator</option>
                </select>
              </td>

              <td>
                <button
                  className="roles-button"
                  onClick={() => handleSave(user.id_rol, user.rol)}
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
