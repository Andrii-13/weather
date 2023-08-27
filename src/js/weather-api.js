import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org';
const END_POINT = '/data/2.5/weather';
const API_KEY = '95632b02f9162f375a368971925f5209';

// axios.defaults.headers.common['x-api-key'] = API_KEY;

// Axios
export function getCurrentWeather(city) {
  return axios.get(`${BASE_URL}${END_POINT}`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_KEY,
    },
  });
  // .then(response => response.data);
}

// Fetch
// const searchParams = new URLSearchParams({
//     q: 'Kyiv',
//     appid: API_KEY,
//     units: 'metric'
//   });

//  export function getCurrentWeather (city){
//    return fetch(`${BASE_URL}${END_POINT}?${searchParams}`).then(responce => {
//         if (!responce.ok){
//             throw new Error(responce.status)
//         }
//         return responce.json();
//     });
//  }
