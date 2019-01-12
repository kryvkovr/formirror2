const initialState = {
  lastSelectedPostId: '',
  selectedPostsIds: []
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_POST':
      return {
        ...state,
        lastSelectedPostId: action.payload,
        selectedPostsIds: [...state.selectedPostsIds, action.payload]
      }
    default:
      return state
  }
}