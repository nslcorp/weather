import axios from 'axios';
import config from '../config';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  expectedError
    ? console.log('expected error:', error)
    : console.log('An unexpected error occurrred:', error);
  return Promise.reject(error);
});

const baseURL = 'http://dataservice.accuweather.com';
const getLocationsUrl = `${baseURL}/locations/v1/cities/autocomplete?apikey=${
  config.weatherKey
}&language=ru&q=`;

const mapLocations = ({ LocalizedName, Country, AdministrativeArea, Key, Rank }) => ({
  city: LocalizedName,
  area: AdministrativeArea.LocalizedName,
  country: Country.LocalizedName,
  key: Key,
  rank: Rank
});

//const API_KEY = '3585775f387b0d0cba6c5b3dc41b8167'; //http://api.openweathermap.or
//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrwRulIzknvLKB_ZX9baK0Ao4B3245LAA&callback=initMap"
// private url = 'https://api.openweathermap.org/data/2.5/weather';// private key = 'appid=38454edd9d0958ac386d653403072f43';
/*const key = 'apiKey=ca2d5b8c76a84ec68544ecdeadf04043';
let urlBase = 'https://newsapi.org/v2/top-headlines';*/
const weather = {
  getLocations: query =>
    axios
      .get(getLocationsUrl + query)
      .then(response => response.data)
      .then(array => (array ? array.map(each => mapLocations(each)) : {}))
};

export default {
  weather
};
