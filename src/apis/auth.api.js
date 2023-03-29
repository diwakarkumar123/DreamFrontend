import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const signIn = async (email, password) => {
  const data = {
    email,
    password,
  };
  const url = `${SERVER_API_URL}/users/login`;
  const result = await axios.post(url, JSON.stringify(data));
  return result;
};

const signUp = async (name, email, password) => {
  const data = {
    name,
    email,
    password,
  };
  const url = `${SERVER_API_URL}/users/signup`;
  const result = await axios.post(url, data);
  return result;
};

export { signIn, signUp };
