import React from "react";
import "./Counter.scss";

export class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () =>
    this.setState(({ count }) => ({
      count: count + 1
    }));

  decrement = () =>
    this.setState(({ count }) => ({
      count: count - 1
    }));

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
    <Counter>
      {({ count, increment, decrement }) => (
        <div className="counter regular">
          <button type="button" onClick={decrement}>
            -
          </button>
          <span className="count">{count}</span>
          <button type="button" onClick={increment}>
            +
          </button>
        </div>
      )}
    </Counter>
  );
}

/* <input type="text" value={count}/> */
