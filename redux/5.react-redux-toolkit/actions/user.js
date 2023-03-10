const {createAsyncThunk} = require("@reduxjs/toolkit");

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickname: 'inseon',
  });

  return result;
});

module.exports = {
  logIn,
}