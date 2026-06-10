const UsersTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-100">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Username</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user}>
              <td className="p-3 border">{user.username}</td>
              <td className="p-3 border">{user.email}</td>
              <td className="p-3 border">
                {user.role === 1 ? "Admin" : "User"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
