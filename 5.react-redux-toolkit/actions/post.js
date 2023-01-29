const {createAsyncThunk} = require("@reduxjs/toolkit");

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

const addPost = createAsyncThunk('post/add', async (data, thunkAPI) => {
  return await delay(500, {
    title: '새로운 글',
    content: '내용내용내용'
  });
})

module.exports = {
  addPost
}