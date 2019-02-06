import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constant/actionTypes';

const initialState = {
  email: '',
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };
    case USER_LOGGED_OUT:
      return {
        ...initialState,
      }
    default:
      return state;
  }
};
