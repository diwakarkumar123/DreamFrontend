import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';
import { KEY_STORAGE } from '../constants/constants';



const getVideo = async () => {
  const url = `${SERVER_API_URL}/videos/userAllVideos`;
  const result = await axios({
    method: 'get',
    url,
  });
  return result;

};

const getVideoById = async id => {
  const url = `${SERVER_API_URL}/video/detail/${id}`;
  const result = await axios.get(url);
  return result;
};

const getVideoByUserId = async id => {
  const url = `${SERVER_API_URL}/video/list/user/${id}`;
  const result = await axios.get(url);
  return result;
};

const getVideoByUserAuth = async (token, privacy = false, page = 1) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = `${SERVER_API_URL}/video/list/user?privacy=${privacy}`;
  const result = await axios.get(url, config);
  return result;
};

const getVideoLikeByUserAuth = async (token, page = 1, limit = 40) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = `${SERVER_API_URL}/like?page=${page}&q=${limit}`;
  const result = await axios.get(url, config);
  return result;
};

const getVideoLikeByIdUser = async (idUser, page = 1, limit = 40) => {
  const url = `${SERVER_API_URL}/like/${idUser}?page=${page}&q=${limit}`;
  const result = await axios.get(url);
  return result;
};

const postVideo = async (data, token) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  };

  const url = `${SERVER_API_URL}/videos/video`;
  const result = await axios({
    method: 'post',
    url,
    headers,
    data,
  });
  return result;
};

const getMyVideos = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/videos/getMyVideos`;
  const result = await axios.get(url, config);
  return result;
}


const sendGifts = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/users/gifts`;
  const result = await axios.post(url, data, config);
  return result;
}


export {
  getVideo,
  postVideo,
  getVideoById,
  getVideoByUserId,
  getVideoByUserAuth,
  getVideoLikeByIdUser,
  getVideoLikeByUserAuth,
  getMyVideos,
  sendGifts
};
