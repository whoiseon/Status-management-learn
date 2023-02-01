const { configureStore } = require('@reduxjs/toolkit');
const reducer = require('./reducers');

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log('action logging', action);
  // before 기능 추가
  dispatch(action); // default 기능
  // after 기능 추가
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(firstMiddleware)
  ),
  devTools: process.env.NODE_ENV !== 'production',
});

module.exports = store;
