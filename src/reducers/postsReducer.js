const initialState = {
  posts: [
    {
      id: 1,
      post: 'We found $input in the library ',
    },
    {
      id: 2,
      post: '$input  making a mess, ',
    },
    {
      id: 3,
      post: 'while $input the pages of a history book about the town.',
    },
    {
      id: 4,
      post: 'Some $input person has been ',
    },
    {
      id: 5,
      post: '$input the park. ',
    },
    {
      id: 6,
      post: 'Maybe they were $input something...',
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
