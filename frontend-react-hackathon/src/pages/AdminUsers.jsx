import React, { useEffect, useState } from "react";
import adminService from "../services/adminService";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    adminService.getUsers().then(setUsers);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}