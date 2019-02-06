import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constant/actionTypes';
import authClient from '../api/authClient';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  payload: user,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

export const login = credentials => async (dispatch) => {
  try {
    const user = await authClient.login(credentials);
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  } catch (e) {
    console.log(e);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('bookwormJWT');
  dispatch(userLoggedOut());
};

// export const fetchUserInfo = () => async dispatch => {
//   try {
//       dispatch(fetchUserInfoStart());
//       const response = await MLPClient.getUserInfo();
//       dispatch(fetchUserInfoSuccess(response));
//   } catch (error) {
//       dispatch(fetchUserInfoError(error));
//   }
// };