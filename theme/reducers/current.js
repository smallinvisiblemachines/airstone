// MAIN REDUCER
export default function current(
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