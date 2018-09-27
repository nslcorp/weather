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

const weather = {
  getLocations: url =>
    axios
      .get(
        `${baseURL}/locations/v1/cities/autocomplete?apikey=${config.weatherKey}&language=ru&q=` +
          url
      )
      .then(response => response.data)
};

export default {
  weather
};
