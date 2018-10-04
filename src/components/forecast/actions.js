import * as types from './types';
import api from '../../api';

export const doGetForecast = () => async dispatch => {
  dispatch({ type: types.GET_FORECAST_REQUEST });

  const query = 'Dnipropetrovsk';
  const days = 'days=4';
  const data = await api.weather.getForecast(query);
  console.log(data);
  dispatch({ type: types.GET_FORECAST_SUCCESS, payload: data });
};
