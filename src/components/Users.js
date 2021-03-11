import { useEffect, useState } from 'react';
import { UsersTable } from './UsersTable';
import UserService from '../services/user.service';

export const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(async () => {
    try {
      setLoading(true);
      const { data } = await UserService.getUsers();
      setError(false);
      setLoading(false);
      setUsers(data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }, []);

  return (
    <div className="text-center container">
      <h1>Users</h1>
      { error && <p className="text-danger"> Unable to fetch data </p>}
      { loading && <p> loading.. </p>}
      { users && <UsersTable users={users} />}
    </div>
  );
};
