import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import search from 'components/search/reducer';

export default combineReducers({
  form,
  search
});
