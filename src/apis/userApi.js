import axios from "axios";
import { SERVER_API_URL, SERVER_DOMAIN } from '../constants/constants'


const getUserInfo = async (token) =>{
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


export { updateProfile, getUserInfo }