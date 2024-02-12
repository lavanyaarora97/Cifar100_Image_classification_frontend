// reducers.js
import { UPDATE_STATE } from './actions';

const initialState = {
  sharedState: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        sharedState: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;