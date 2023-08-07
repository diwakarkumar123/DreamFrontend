import { SERVER_API_URL, SERVER_DOMAIN } from '../constants/constants'
import axios from 'axios'

const searchUser = async (text)=>{

    const url = `${SERVER_API_URL}/search/searchUser/${text}`;

    const result = await axios.get(url)
    return result.data;
}    


export {searchUser}