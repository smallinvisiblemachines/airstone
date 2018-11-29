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
  }
}