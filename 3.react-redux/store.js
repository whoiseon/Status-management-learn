const { createStore, applyMiddleware, compose } = require('redux');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: false,
    data: null
  },
  posts: [],
}

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log('action logging', action);
  // before 기능 추가
  dispatch(action); // default 기능
  // after 기능 추가
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === 'function') { // 비동기일 경우, action type이 function일 경우
    return action(store.dispatch, store.getState);
  }

  return dispatch(action); // 동기
}

const enhancer = applyMiddleware(
  firstMiddleware,
  thunkMiddleware
);

const store = createStore(reducer, initialState, enhancer);

module.exports = store