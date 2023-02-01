const {createSlice} = require("@reduxjs/toolkit");
const {logIn} = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null
}

// const userReducer = (prevState = initialState, action) => {
//   return produce(prevState, (draft) => {
//     switch (action.type) {
//       case 'LOG_IN_PENDING':
//         draft.data = null;
//         draft.isLoggingIn = true;
//         break;
//       case 'LOG_IN_FULFILLED':
//         draft.data = action.payload;
//         draft.isLoggingIn = false;
//         break;
//       case 'LOG_IN_REJECTED':
//         draft.data = null;
//         draft.isLoggingIn = false;
//         break;
//       case 'LOG_OUT':
//         draft.data = null;
//         draft.isLoggingIn = false;
//         break;
//       default:
//         return prevState;
//     }
//   });
// };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { // 동기 action
    logOut: (state, action) => {
      state.data = null;
    }
  },
  extraReducers: (builder) => builder
    .addCase(logIn.pending, (state, action) => {
      state.isLoggingIn = true;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoggingIn = false;
    })
    .addCase(logIn.rejected, (state, action) => {
      state.isLoggingIn = false;
    }),
});

module.exports = userSlice;