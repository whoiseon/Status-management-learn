const {produce} = require('immer');

const initialState = {
  isLoggingIn: false,
  data: null
}

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case 'LOG_IN_PENDING':
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case 'LOG_IN_FULFILLED':
        draft.data = action.payload;
        draft.isLoggingIn = false;
        break;
      case 'LOG_IN_REJECTED':
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case 'LOG_OUT':
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      default:
        return prevState;
    }
  });
};

module.exports = userReducer;