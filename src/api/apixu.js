import keys from 'config';
import axios from 'axios';

const baseUrl = 'http://api.apixu.com/v1';
const currentUrl = baseUrl + '/current.json?key=' + keys.APIXU_API_KEY;
const forecastUrl = baseUrl + '/forecast.json?key=' + keys.APIXU_API_KEY;
const searchUrl = baseUrl + '/search.json?key=' + keys.APIXU_API_KEY;
const historyUrl = baseUrl + '/history.json?key=' + keys.APIXU_API_KEY;

export default {
  current: query => axios.get(currentUrl + query).then(response => response.data),

  // .then(array => (array ? array.map(each => mapF(each)) : {})),

  forecast: () => {},
  search: query => axios.get(searchUrl + query).then(response => response.data),
  history: () => {}
};
