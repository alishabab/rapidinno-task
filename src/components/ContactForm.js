import { useState } from 'react';
import UsersTable from './UsersTable';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      phone,
      address: {
        city: address,
      },
    };
    setUsers([...users, user]);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <div>
      <h1 className="text-center"> Contact </h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          First Name
          <input type="text" id="name" value={name} placeholder="Your name.." onChange={e => setName(e.target.value)} />
        </label>
        <label htmlFor="email">
          Email
          <input type="text" id="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label htmlFor="phone">
          Phone
          <input type="text" id="phone" value={phone} placeholder="Phone" onChange={e => setPhone(e.target.value)} />
        </label>
        <label htmlFor="address">
          Address
          <input type="text" id="address" value={address} placeholder="Address" onChange={e => setAddress(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      { users.length > 0 && <UsersTable users={users} /> }
    </div>
  );
};

export default ContactForm;
