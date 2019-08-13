import React from "react";
import "./Counter.scss";

export class Counter extends React.Component {
  static stateChangeTypes = {
    BUTTON_INC_CLICK: "BUTTON_INC_CLICK",
    BUTTON_DEC_CLICK: "BUTTON_DEC_CLICK"
  };

  state = {
    count: 5
  };

  increment = () => {
    return this.changeCount(
      ({ count }) => ({
        count: count + 1
      }),
      Counter.stateChangeTypes.BUTTON_INC_CLICK
    );
  };

  decrement = () => {
    this.changeCount(
      ({ count }) => ({
        count: count - 1
      }),
      Counter.stateChangeTypes.BUTTON_DEC_CLICK
    );
  };

  changeCount = (changes, changeType) => {
    this.setState(state => {
      const newState = changes(state);
      const { stateReducer } = this.props;

      const finalState = stateReducer
        ? stateReducer(state, { ...newState, type: changeType })
        : newState;

      return finalState;
    });
  };

  render() {
    return this.props.children({
      count: this.state.count,
      increment: this.increment,
      decrement: this.decrement
    });
  }
}

export default function Usage() {
  return (
    <Counter stateReducer={incFastAboveTen}>
      {({ count, increment, decrement }) => (
        <div className="counter">
          <button type="button" onClick={decrement}>
            <span>➖</span>
          </button>
          <span className="count">{count}</span>
          <button type="button" onClick={increment}>
            <span>➕</span>
          </button>
        </div>
      )}
    </Counter>
  );
}

const incFastAboveTen = (state, changes) => {
  if (state.count < 10) {
    return changes;
  }

  switch (changes.type) {
    case Counter.stateChangeTypes.BUTTON_INC_CLICK: {
      const count = state.count + 5;
      return { ...changes, count };
    }
    case Counter.stateChangeTypes.BUTTON_DEC_CLICK: {
      const count = state.count - 5;
      return { ...changes, count };
    }
    default:
      return changes;
  }
};
