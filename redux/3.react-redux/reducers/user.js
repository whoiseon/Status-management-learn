const initialState = {
  isLoggingIn: false,
  data: null
}

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_PENDING':
      return {
        ...prevState,
        isLoggingIn: true,
      }
    case 'LOG_IN_FULFILLED':
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.payload,
      }
    case 'LOG_IN_REJECTED':
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      }
    case 'LOG_OUT':
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      }
    default:
      return prevState;
  }
};

module.exports = userReducer;
