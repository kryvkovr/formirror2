// import { timeout } from "q";

export const selectPostAction = id => ({
  type: 'SELECT_POST',
  payload: id,
});

export const removePostAction = id => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'REMOVE_POST',
      payload: id,
    });
  }, 1000);
};
