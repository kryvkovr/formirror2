import { USER_LOGGED_IN } from '../constant/actionTypes';
import authClient from '../api/authClient';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  payload: user,
});

export const login = credentials => async (dispatch) => {
  try {
    const user = await authClient.login(credentials);
    dispatch(userLoggedIn(user));
  } catch (e) {
    console.log(e);
  }
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