export const INCREMENT = 'INCREMENT';
export function increment() {
  return {
    type: INCREMENT,
    payload: true
  }
}

export const DECREMENT = 'DECREMENT';
export function decrement() {
  return {
    type: DECREMENT,
    payload: true
  }
}

export const GET_COUNT = 'GET_COUNT';

export default function count( state = null, action ) {
  switch(action.type) {
    default:

      return state;

    case INCREMENT:

      return state + 1;

    case DECREMENT:

      return state - 1;
  }
}

export function getCount() {
  return (dispatch, getState) => {
    dispatch({
      type: GET_COUNT,
      payload: getState()
    })
  }
}