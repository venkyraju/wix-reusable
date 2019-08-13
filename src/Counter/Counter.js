import React from "react";
import classNames from 'classnames'
import "./Counter.scss";

export class Counter extends React.Component {
  static defaultProps = {
    orientation: "horizontal",
    rtl: false,
    inputElement: null,
    size:"normal"
  };
  state = {
    count: 0
  };

  changeCount = newCount =>
    this.setState(
      newCount,
      () => this.props.onChange && this.props.onChange(this.state.count)
    );

  increment = () =>
    this.changeCount(({ count }) => ({
      count: count + 1
    }));

  decrement = () =>
    this.changeCount(({ count }) => ({
      count: count - 1
    }));

  renderInputElement = () => {
    return this.props.inputElement === null ? (
      <span className="count">{this.state.count}</span>
    ) : (
      React.cloneElement(this.props.inputElement, {
        value: this.state.count
      })
    );
  };

  render() {
    const decButton = (
      <button type="button" onClick={this.decrement}>
        <span>-</span>
      </button>
    );

    const incButton = (
      <button type="button" onClick={this.increment}>
        <span>+</span>
      </button>
    );
    const { rtl, orientation } = this.props;
    return (
      <div className={classNames('counter', this.props.size, {
        vertical: orientation === "vertical"
      })}>
        {rtl ? incButton : decButton}
        {this.renderInputElement()}
        {rtl ? decButton: incButton}
      </div>
    );
  }
}

export default function Usage() {
  return (
    <Counter
      // rtl={true}
      // orientation="vertical"
      // inputElement={<input type="text" />}
      // size="small"
      onChange={count => console.log(`the new count is ${count}`)}
    />
  );
}
