import {action} from "mobx";

const { observable } = require('mobx');

const userStore = observable({
  isLoggingIn: false,
  data: null,
  logIn(data) {
    userStore.isLoggingIn = true;
    setTimeout(action(() => {
      userStore.data = data;
      userStore.isLoggingIn = false;
      postStore.data.push(1);
    }), 2000);
  },
  logOut() {
    userStore.data = null;
  },
});

const postStore = observable({
  data: [],
  addPost(data) {
    postStore.data.push(data);
  },
  get postLength() {
    return this.data.length
  }
});

export { userStore, postStore };
