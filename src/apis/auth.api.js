import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const signIn = async (email ) => {

  const url = `${SERVER_API_URL}/users/login`;
  const result = await axios.post(url, {email});
  return result;
};

const signUp = async (name, email, firebase_uid, profile_pic) => {
  const data = {
    name,
    email,
    firebase_uid,
    profile_pic,
  };
  const url = `${SERVER_API_URL}/users/signup`;
  const result = await axios.post(url, data);
  return result;
};

export { signIn, signUp };
