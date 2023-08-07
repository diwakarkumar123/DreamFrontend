import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';


const fetchComment = async (id) => {
  const url = `${SERVER_API_URL}/comments/fetchComment/${id}`;
  const result = await axios.get(url)
  return result.data;
}

const createComment = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/comments/createComment`;
  const result = await axios.post(url, data, config)
  return result.data;
}

const replyComment = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/comments/replyComment`;
  const result = await axios.post(url, data, config)
  return result.data;
}

const likeComment = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/comments/likeComment`;
  const result = await axios.post(url, data, config)
  return result.data;
}

const unlikeComment = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/comments/unlikeComment`;
  const result = await axios.post(url, data, config);
  return result.data;
}


const editComment = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/comments/editComment`;
  const result = await axios.put(url, data, config);
  return result.data;
}

const deleteComment = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/comments/deleteComment`;
  const result = await axios.delete(url, data, config);
  return result.data;
}


const getComment = async (idComment, page = 1) => {
  const url = `${SERVER_API_URL}/comment/${idComment}?page=${page}`;
  const result = await axios.get(url);
  return result.data;
};

const postComment = async (video, comment, token) => {
  const data = {
    video,
    comment,
  };
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/commment`;
  const result = await axios.post(url, data, config);
  return result.data;
};

export {
  getComment,
  postComment,
  fetchComment,
  createComment,
  replyComment,
  likeComment,
  unlikeComment,
  editComment,
  deleteComment
};
