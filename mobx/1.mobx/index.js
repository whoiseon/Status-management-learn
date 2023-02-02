const { observable, autorun, runInAction, reaction, action} = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});

autorun(() => {
  console.log('changed', state.compA);
});

reaction(() => {
  return state.compB;
}, () => {
  console.log('reaction', state.compB);
});

const change = action(() => {
  state.compA = 'b';
  state.compB = 25;
  state.compC = true;
});

runInAction(() => {
  state.compA = 'b';
  state.compB = 25;
  state.compC = true;
});

runInAction(() => {
  state.compC = 'c';
});
