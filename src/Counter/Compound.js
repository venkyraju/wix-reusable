import React from "react";
import "./Counter.scss";

const CounterContext = React.createContext();

export class Counter extends React.Component {
  static IncrementButton = CounterIncButton;
  static DecrementButton = CounterDecButton;
  static CountText = CounterText;
  static CountInput = CounterInput;

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement
    };
  }
  increment = () =>
    this.setState(({ count }) => ({
      count: count + 1
    }));

  decrement = () =>
    this.setState(({ count }) => ({
      count: count - 1
    }));

  render() {
    // Alternative for using context
    // return React.Children.map(child =>
    //   React.cloneElement(child, { ...this.state })
    // );
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

function CounterIncButton() {
  const { increment } = React.useContext(CounterContext);
  return (
    <button type="button" onClick={increment}>
      <span>+</span>
    </button>
  );
}

function CounterDecButton() {
  return (
    <CounterContext.Consumer>
      {({ decrement }) => (
        <button type="button" onClick={decrement}>
          <span>-</span>
        </button>
      )}
    </CounterContext.Consumer>
  );
}

function CounterText() {
  return (
    <CounterContext.Consumer>
      {({ count }) => <span className="count">{count}</span>}
    </CounterContext.Consumer>
  );
}

export default function Usage() {
  return (
    <Counter>
      <div class="counter">
        <Counter.DecrementButton />
        <Counter.CountText />
        <Counter.IncrementButton />
        {/* <Counter.CountInput /> */}
      </div>
    </Counter>
  );
}

function CounterInput() {
  return (
    <CounterContext>{({ count }) => <input value={count} />}</CounterContext>
  );
}
