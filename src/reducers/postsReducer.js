const initialState = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      post: 'Post 1:We found $input in the library ',
    },
    {
      id: 2,
      title: 'Post 2',
      post: 'Post 2:$input  making a mess, ',
    },
    {
      id: 3,
      title: 'Post 3',
      post: 'Post 3:while $input the pages of a history book about the town.',
    },
    {
      id: 4,
      title: 'Post 4',
      post: 'Post 4:Some $input person has been ',
    },
    {
      id: 5,
      title: 'Post 5',
      post: 'Post 5:$input the park. ',
    },
    {
      id: 6,
      title: 'Post 6',
      post: 'Post 6:Maybe they were $input something...',
    },
  ],
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
