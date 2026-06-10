import { useEffect, useState } from "react";
import UsersTable from "../category/UsersTable";

import { getAllUsers } from "../services/authService";

const UserPage = () => {
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();

      setUser(response.data || response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Data User</h1>
      {loading ? <p>Loading...</p> : <UsersTable users={user} />}
    </div>
  );
};

export default UserPage;
