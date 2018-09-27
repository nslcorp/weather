import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import home from '../components/home-page/reducer';

export default combineReducers({
  form,
  home
});
