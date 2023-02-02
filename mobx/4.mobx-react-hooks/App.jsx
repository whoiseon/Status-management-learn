import React, {useCallback} from "react";
import {useLocalObservable, observer} from "mobx-react";
import {action} from "mobx";

import { userStore, postStore } from "./store";

const App = () => {
  const state = useLocalObservable(() => ({
    name: '',
    password: '',
    onChangeName: action((e) => {
      state.name = e.target.value
    }),
    onChangePassword: action((e) => {
      state.password = e.target.value
    }),
  }))

  const onLogIn = useCallback(() => {
    userStore.logIn({
      nickname: 'inseon',
      password: '1234',
    });
  }, []);

  const onLogout = useCallback(() => {
    userStore.logOut();
  }, []);

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
          ? <button onClick={onLogIn}>로그인</button>
          : <button onClick={onLogout}>로그아웃</button>
      }
      <div>{ postStore.postLength } </div>
      <div>
        <input type="text" value={state.name} onChange={state.onChangeName} />
        <input type="password" value={state.password} onChange={state.onChangePassword} />
      </div>
    </div>
  );
};

export default observer(App);
