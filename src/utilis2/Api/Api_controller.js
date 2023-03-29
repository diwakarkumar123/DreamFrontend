import { post_request, get_request, put_request ,patch_request,delete_request} from './Requests';

const Login_api = async body => {
  const response = await post_request({
    target: '/users/login',
    body: body,
  });
  return response;
};

const Signup_api = async body => {
  const response = await post_request({
    target: '/users/signup',
    body: body,
  });
  return response;
};
const Delete_User_api = async body => {
  const response = await delete_request({
    target: '/users/delete',
    body: body,
  });
  return response;
};
const Update_User_api = async body => {
  const response = await patch_request({
    target: '/users/update',
    body: body,
  });
  return response;
};

// const getNotification = async (id) => {
//   const response = await get_request({ target: `v2/business/notifications?facility_id=${id}` });
//   return response;
// };

const GET_ALL_VIDEOS = async body => {
  const response = await get_request({
    target: '/videos/userAllVideos'
  });
  return response;
};
const CREATE_VIDEO = async body => {
  const response = await post_request({
    target: '/videos/video'
  });
  return response;
};
const GET_VIDEO_BY_ID = async ID => {
  const response = await get_request({
    target: '/videos/video?videoId&userId'
  });
  return response;
};

export {
  Login_api,
  Signup_api,
  // getNotification,
  GET_ALL_VIDEOS,
  CREATE_VIDEO,
  GET_VIDEO_BY_ID,
  Update_User_api,
  Delete_User_api
  };
