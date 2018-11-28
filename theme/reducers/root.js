import { combineReducers } from 'redux';

// DUX
import pages from './pages.js';

// import all other reducers here
// the root reducer will be fed to any generated store

const rootReducer = combineReducers({
  pages
});

export default rootReducer;