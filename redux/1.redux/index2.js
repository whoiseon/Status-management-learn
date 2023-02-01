const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.payload,
      }
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      }
    case 'ADD_POST':
      return {
        ...prevState,
        posts: [...prevState.posts, action.payload],
      }
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
}

const store = createStore(reducer, initialState);

store.subscribe(() => { // react-redux 안에 들어있음.
  console.log('changed') // 화면을 바꿔주는 코드 여기서
});

console.log('1nd', store.getState());

// Action
const logIn = (payload) => {
  return {
    type: 'LOG_IN',
    payload,
  }
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
};

const addPost = (payload) => {
  return {
    type: 'ADD_POST',
    payload,
  }
}

// ---------

store.dispatch(logIn({
  id: 1,
  name: 'inseon',
  admin: true,
}));

console.log('2nd', store.getState());

store.dispatch(addPost({
  userId: 1,
  id: 1,
  content: 'Hello, redux',
}));

console.log('3rd', store.getState());

store.dispatch(addPost({
  userId: 1,
  id: 2,
  content: 'Second, redux',
}));

console.log('4th', store.getState());

store.dispatch(logOut());

console.log('5th', store.getState());
