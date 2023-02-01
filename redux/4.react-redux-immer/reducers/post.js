const {produce} = require('immer');

const initialState = []

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case 'ADD_POST':
        draft.unshift(action.payload);
        break;
      default:
        break;
    }
  });
};

module.exports = postReducer;
