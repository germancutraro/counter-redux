import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import actions from "./actions";

class App extends Component {
  incrementHandler = () => {
    this.props.incrementHandler();
  };

  decrementHandler = () => {
    this.props.decrementHandler();
  };

  render() {
    return (
      <div className="App">
        <h2>Counter</h2>
        <label>{this.props.counter}</label>
        <div>
          <button onClick={this.incrementHandler}>INCREMENT</button>
        </div>
        <div>
          <button onClick={this.decrementHandler}>DECREMENT</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementHandler: () => dispatch(actions.incrementAction()),
    decrementHandler: () => dispatch(actions.decrementAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
