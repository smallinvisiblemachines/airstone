export const GET_THEMES = 'GET_THEMES';

export function getThemes() {
  return (dispatch, getState) => {
    dispatch({
      type: GET_THEMES,
      payload: getState()
    })
  }
}

// MAIN REDUCER
export default function themes(
  state = [],
  action
) {
  let newState = {
    ...state
  };

  switch (action.type) {
    default:
      return newState;
    case GET_THEMES:
      return action.payload.themes;
  }
}