const initialState = {
  lastSelectedPostId: '',
  selectedPostsIds: [1,2],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_POST':
      return {
        ...state,
        lastSelectedPostId: action.payload,
        selectedPostsIds: [...state.selectedPostsIds, action.payload],
      };
    case 'REMOVE_POST':
      return {
        ...state,
      };
    default:
      return state;
  }
};
