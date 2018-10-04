import * as types from './types';
const initialState = {
  entities: [],
  loading: false,
  current: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_FORECAST_REQUEST:
      return { ...state, loading: true };

    case types.GET_FORECAST_SUCCESS:
      return { ...state, entities: payload };

    default:
      return state;
  }
};

export const getForecast = state => state.forecast.cities;
export const getLoading = state => state.forecast.loading;
export const getCurrent = state => state.forecast.current;
