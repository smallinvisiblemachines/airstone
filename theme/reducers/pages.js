export const GET_PAGES = 'GET_PAGES';

export function getPages() {
  return (dispatch, getState) => {
    dispatch({
      type: GET_PAGES,
      payload: getState()
    })
  }
}

// MAIN REDUCER
export default function pages(
  state = [],
  action
) {
  let newState = {
    ...state
  };

  switch (action.type) {
    default:
      return newState;
    case GET_PAGES:
      return action.payload.pages;
  }
}