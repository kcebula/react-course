import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { reducer as authReducer } from './auth.reducer';
import { reducer as streamsReducer } from './streams.reducer';

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  streams: streamsReducer
})
