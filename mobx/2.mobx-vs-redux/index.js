const { observable, runInAction, action} = require('mobx');


const userState = observable({
  isLoggingIn: true,
  data: null,
});

const postState = observable([]);

runInAction(() => {
  userState.data = {
    id: 1,
    nickname: 'inseon',
  }
  postState.push({ id: 1, content: 'Hello' });
});

class UserStore {
  state = observable({
    name: 'inseon',
    age: 25,
  });

  @action
  changeName(value) {
    this.state.name = value;
  }
}
