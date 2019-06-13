import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  constructor () {
    super()
    this.state = {
      n: 0
    }
  }
  add () {
    this.setState((state) => ({
      n: ++state.n
    }))
  }
  render () {
    return (
      <div>
        {this.props.n}
        <input value="增加" onClick={() => {this.props.add()}} type="button" />
      </div>
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    n: state.n
  }
}

// const mapDispatchToProps = {
//   add: () => {
//     return {
//       type: 'add',
//       payload: 1
//     }
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({type: 'add', payload: 1})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
