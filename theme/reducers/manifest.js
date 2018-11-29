export const GET_MANIFEST = 'GET_MANIFEST';

export function getManifest() {
  return (dispatch, getState) => {
    dispatch({
      type: GET_MANIFEST,
      payload: getState()
    })
  }
}

// MAIN REDUCER
export default function manifest(
  state = [],
  action
) {
  let newState = {
    ...state
  };

  switch (action.type) {
    default:
      return newState;
    case GET_MANIFEST:
      return action.payload.manifest;
  }
}