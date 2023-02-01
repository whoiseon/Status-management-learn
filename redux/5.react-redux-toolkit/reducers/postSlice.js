const { createSlice } = require('@reduxjs/toolkit');
const {logIn} = require("../actions/user");
const {addPost} = require("../actions/post");

const initialState = {
  data: [],
  isLoading: false
}

// const postReducer = (prevState = initialState, action) => {
//   return produce(prevState, (draft) => {
//     switch (action.type) {
//       case 'ADD_POST':
//         draft.unshift(action.payload);
//         break;
//       default:
//         break;
//     }
//   });
// };

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: { // 동기 action

  },
  extraReducers: (builder) => builder
    .addCase(addPost.pending, (state, action) => {

    })
    .addCase(addPost.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
    })
    .addCase(addPost.rejected, (state, action) => {

    })
    .addMatcher((action) => { // 공통적인 처리 ex type으로 /pending이 들어가면 두번째 인자로 스테이트 변경
      return action.type.includes('/pending');
    }, (state, action) => {
      state.isLoading = true;
    })
})

module.exports = postSlice;
