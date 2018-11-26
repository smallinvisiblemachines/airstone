import { combineReducers } from 'redux';

// DUX
import counter from './counter.js';

// import all other reducers here
// the root reducer will be fed to any generated store

const rootReducer = combineReducers({
  counter
});

export default rootReducer;