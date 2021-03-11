import { useEffect, useState } from 'react';
import UsersTable from './UsersTable';
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
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);

  return (
    <div className="text-center container">
      <h1>Users</h1>
      { loading && <p> loading.. </p>}
      { users && <UsersTable users={users} />}
    </div>
  );
};

export default Users;
