import * as types from './types';
const initialState = {
  cities: [],
  loading: false,
  value: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FIND_CITY_BY_NAME_REQUEST:
      return { ...state, loading: true };

    case types.FIND_CITY_BY_NAME_SUCCESS:
      return { ...state, cities: payload };

    case types.SEARCH_VALUE_CHANGE:
      return { ...state, value: payload };

    default:
      return state;
  }
};

export const getCities = state => state.search.cities;
export const getLoading = state => state.search.loading;
export const getValue = state => state.search.value;
