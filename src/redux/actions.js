// actions.js
export const UPDATE_STATE = 'UPDATE_STATE';

export const updateState = (newState) => ({
  type: UPDATE_STATE,
  payload: newState,
});
