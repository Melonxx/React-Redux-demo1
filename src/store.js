import { createStore } from 'redux'

const stateChange = (state, action) => {
  if(state === undefined) {
    return {
      n: 101
    }
  } else {
    if (action.type === 'add') {
      console.log('add')
      return {n: state.n + action.payload}
    }
  }
}

export default createStore(stateChange)