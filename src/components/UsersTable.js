/* eslint-disable react/prop-types */
export const UsersTable = ({ users }) => (
  <div className="table-container">
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
        { users.map(user => {
          const {
            id, name, email, phone, address,
          } = user;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                {address.city}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
