import { SERVER_API_URL } from '../constants/constants';
import { useEffect, useState } from 'react';


const getAllCountries = async ()=>{
   const country = await axios.get(`${SERVER_API_URL}/country/allCountry`)
   return country.data
    
}


export {getAllCountries};




