import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';


const getAllCountries = async () => {
   const url = `${SERVER_API_URL}/country/allCountry`;
   const result = await axios.get(url)
   return result.data
}




const getCitiesByCountryCode = async (country_code) => {
   const url = `${SERVER_API_URL}/country/getCitiesByCode/${country_code}`;
   const result = await axios.get(url)
   return result.data
}



export { getAllCountries, getCitiesByCountryCode };




