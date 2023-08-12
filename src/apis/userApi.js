import axios from "axios";
import { SERVER_API_URL, SERVER_DOMAIN } from '../constants/constants'


const getUserInfo = async (token) => {
    const url = `${SERVER_API_URL}/users/info`;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const result = await axios.get(url, config)
    return result.data;
}

const updateProfile = async (token, data) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const url = `${SERVER_API_URL}/users/update`;
    const result = await axios.patch(url, data, config)
    return result.data
}

const user_exist = async (data) => {
    const email = { email: data }
    const url = `${SERVER_API_URL}/users/userExist`;
    const result = await axios.get(url, email)
    return result.data;
}

const storePayments = async (data, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const url = `${SERVER_API_URL}/users/transaction`;
    const result = await axios.post(url, data, config)
    return result.data;
}

const follow = async (data, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const url = `${SERVER_API_URL}/users/follow`;
    const result = await axios.post(url, data, config)
    return result.data;
}

const unfollow = async (data, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const url = `${SERVER_API_URL}/users/unfollow`;
    const result = await axios.post(url, data, config)
    return result.data;
}

const getInfoById = async (id) => {
    const url = `${SERVER_API_URL}/users/infoById/${id}`;
    const result = await axios.get(url)
    return result.data;
}

const getFollowersDetails = async (id) => {
    const url = `${SERVER_API_URL}/users/followersDetails/${id}`;
    const result = await axios.get(url)
    return result.data;
}

const getFollowingsDetails = async (id) => {
    const url = `${SERVER_API_URL}/users/followingsDetails/${id}`;
    const result = await axios.get(url)
    return result.data;
}

const getAllMessages = async (id, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const url = `${SERVER_API_URL}/users/getAllMessages/${id}`;
    const result = await axios.get(url, config)
    return result.data;
}

const getMyAllChatedPerson = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const url = `${SERVER_API_URL}/users/getMyAllChatedPerson`;
    const result = await axios.get(url, config)
    return result.data;
}

// FUNCTION FOR GETTING ALL THE FOLLOWING PERSONS
const getAllFollowingsUsers = async (token)=>{
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const url = `${SERVER_API_URL}/users/getAllFollowingsUsers`;
    const result = await axios.get(url, config)
    return result.data;
}



export {
    updateProfile,
    getUserInfo,
    user_exist,
    storePayments,
    follow,
    unfollow,
    getInfoById,
    getFollowersDetails,
    getFollowingsDetails,
    getAllMessages,
    getMyAllChatedPerson,
    getAllFollowingsUsers
}