//apixu
import axios from 'axios/index';

const mapForecast = data => {
  const { location, current, forecast } = data;
  return {
    location: {
      city: location.name,
      country: location.country
    },
    current: {
      temp: current.temp_c,
      feelsLike: current.feelslike_c,
      other: {
        ...current
      }
    }
  };
};

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  expectedError
    ? console.log('expected error:', error)
    : console.log('An unexpected error occurrred:', error);
  return Promise.reject(error);
});
