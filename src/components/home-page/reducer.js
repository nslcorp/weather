import * as types from './types';
const initialState = {
  cities: [],
  loading: false,
  current: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CITIES_REQUEST:
      return { ...state, loading: true };

    case types.GET_CITIES_SUCCESS:
      return { ...state, cities: payload };

    case types.ADD_CITY_TO_FAVORITES:
      return { ...state, current: payload };

    default:
      return state;
  }
};

export const getCities = state => state.home.cities;
export const getLoading = state => state.home.loading;
export const getCurrent = state => state.home.current;
