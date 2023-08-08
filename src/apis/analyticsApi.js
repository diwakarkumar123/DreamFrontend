import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';




const dimanodAnalytics = async (token, startingtime, endingTime) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const url = `${SERVER_API_URL}/analytics/getDiamondAnalytics/${startingtime}/${endingTime}`;
    const result = await axios.get(url, config)
    return result.data
}


export {
    dimanodAnalytics
}