/* eslint-disable react/prop-types */
const UsersTable = ({ users }) => (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
      </tr>
      { users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            {user.address.city}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UsersTable;
