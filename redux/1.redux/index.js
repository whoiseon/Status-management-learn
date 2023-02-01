const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.payload,
      }
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.payload,
      }
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.payload,
      }
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null
}

const store = createStore(reducer, initialState);

store.subscribe(() => { // react-redux 안에 들어있음.
  console.log('changed') // 화면을 바꿔주는 코드 여기서
});

console.log('1nd', store.getState());

// Action
const changeCompA = (payload) => {
  return {
    type: 'CHANGE_COMP_A',
    payload,
  }
};

const changeCompB = (payload) => {
  return {
    type: 'CHANGE_COMP_B',
    payload,
  }
};

const changeCompC = (payload) => {
  return {
    type: 'CHANGE_COMP_C',
    payload,
  }
};

store.dispatch(changeCompA('b'));

console.log('2nd', store.getState());
