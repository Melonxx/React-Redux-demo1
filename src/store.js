import { createStore } from 'redux'

const stateChange = (state, action) => {
  if(state === undefined) {
    return {
      n: 10
    }
  } else {
    if (action.type === 'add') {
      return {n: state.n + action.payload}
    }
  }
}

export default createStore(stateChange)