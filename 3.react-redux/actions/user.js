// async action creator
const logIn = (payload) => {
  return (dispatch, getState) => { // async action
    dispatch(logInPending(payload));
    try {
      setTimeout(() => {
        dispatch(logInFulfilled({
          userId: 1,
          nickname: 'inseon'
        }));
      }, 2000);
      // axios.post().then().catch()으로 대체
    } catch (error) {
      dispatch(logInRejected(error));
    }
  };
};

const logInPending = (payload) => {
  return {
    type: "LOG_IN_PENDING",
    payload,
  }
}

const logInFulfilled = (payload) => {
  return {
    type: "LOG_IN_FULFILLED",
    payload,
  }
}

const logInRejected = (payload) => {
  return {
    type: "LOG_IN_REJECTED",
    payload,
  }
}

// action creator
const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
};

module.exports = {
  logIn,
  logOut,
}