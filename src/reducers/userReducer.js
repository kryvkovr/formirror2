import { USER_LOGGED_IN } from '../constant/actionTypes';

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
    default:
      return state;
  }
};
