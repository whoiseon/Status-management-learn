import React, { Component } from "react";
import { observer } from "mobx-react";
import {observable} from "mobx";

import { userStore, postStore } from "./store";

@observer
class App extends Component {
  state = observable({
    name: '',
    password: '',
  });

  onLogIn = () => {
    userStore.logIn({
      nickname: 'inseon',
      password: '1234',
    });
  };

  onLogout = () => {
    userStore.logOut();
  };

  onChangeName = (event) => {
    this.state.name = event.target.value;
  };

  onChangePassword = (event) => {
    this.state.password = event.target.value;
  };

  render() {
    return (
      <div>
        {
          userStore.isLoggingIn
            ? <div>로그인 중 ...</div>
            : userStore.data
              ? <div>{ userStore.data.nickname }</div>
              : <div>로그인해주세요</div>
        }
        {
          !userStore.data
            ? <button onClick={this.onLogIn}>로그인</button>
            : <button onClick={this.onLogout}>로그아웃</button>
        }
        <div>{ postStore.data.length }</div>
        <div>
          <input type="text" value={this.state.name} onChange={this.onChangeName} />
          <input type="password" value={this.state.password} onChange={this.onChangePassword} />
        </div>
      </div>
    )
  }
}

export default App;
