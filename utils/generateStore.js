import { createStore } from 'redux'

const generateStore = function(rootReducer, initialState, middleware) {
  if (middleware) {
    return createStore(
      rootReducer,
      initialState,
      middleware
    );  
  } else {
    return createStore(
      rootReducer,
      initialState
    );
  }
  
}

export default generateStore;