import { USER_LOGGED_IN } from '../constant/actionTypes';
import authClient from '../api/authClient';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

export const login = credentials => dispatch =>
  authClient.login(credentials)
    .then(user => dispatch(userLoggedIn(user)));
