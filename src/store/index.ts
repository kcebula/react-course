import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import Reducers from './reducers';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});


export default createStore(Reducers, composeEnhancers(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));



