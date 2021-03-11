/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import UserService from '../services/user.service';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    try {
      setLoading(true);
      const { data } = await UserService.getUsers();
      setLoading(false);
      setUsers(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, []);

  return (
    <div className="text-center">
      <h1>Users</h1>
      { loading && <p> loading.. </p>}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          { users && users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street}
                ,
                {user.address.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
