import { USER_LOGGED_IN } from '../constant/actionTypes';
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        userData: action.payload,
      };
    default:
      return state;
  }
};
