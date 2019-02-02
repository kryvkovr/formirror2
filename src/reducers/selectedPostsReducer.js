const initialState = {
  lastSelectedPostId: '',
  selectedPostsIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_POST':
      console.log(action.payload);
      return {
        ...state,
        lastSelectedPostId: action.payload,
        selectedPostsIds: [...state.selectedPostsIds, action.payload],
      };
    case 'REMOVE_POST':
      console.log(action.payload);
      return {
        ...state,
        // lastSelectedPostId: action.payload,
        // selectedPostsIds: [...state.selectedPostsIds, action.payload]
      };
    default:
      return state;
  }
};
