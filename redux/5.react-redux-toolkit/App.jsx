import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "./actions/user";
import {addPost} from "./actions/post";
import userSlice from "./reducers/userSlice";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(logIn({
      id: 'whois',
      password: '1234',
    }));
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  const handleAddPost = useCallback(() => {
    dispatch(addPost())
  }, []);

  return (
    <div>
      {
        user?.isLoggingIn
          ? <div>로그인 중 ...</div>
          : user?.data
            ? <div>{ user?.data.nickname }</div>
            : <div>로그인해주세요</div>
      }
      {
        !user?.data
          ? <button onClick={onClick}>로그인</button>
          : <button onClick={onLogout}>로그아웃</button>
      }
      {
        user?.data && (
          <button onClick={handleAddPost}>게시글 작성</button>
        )
      }
    </div>
  );
};

export default App;
