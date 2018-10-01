import * as types from './types';
import api from '../../api';

export const doGetCities = query => async dispatch => {
  dispatch({ type: types.GET_CITIES_REQUEST });

  console.log(api);
  const data = await api.weather.getLocations(query);
  console.log(data);
  dispatch({ type: types.GET_CITIES_SUCCESS, payload: data });
};
