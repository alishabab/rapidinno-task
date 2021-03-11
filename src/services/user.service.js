import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => axios.get(API_URL);

export default { getUsers };
