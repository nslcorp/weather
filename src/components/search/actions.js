import * as types from './types';
import api from 'api';

export const doFindCityByName = query => async dispatch => {
  dispatch({ type: types.FIND_CITY_BY_NAME_REQUEST });

  try {
    const data = await api.weather.search('&q=' + query);
    console.log('FindByName', data);
    dispatch({ type: types.FIND_CITY_BY_NAME_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const doSearchChange = value => dispatch =>
  dispatch({ type: types.SEARCH_VALUE_CHANGE, payload: value });
