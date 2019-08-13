import React from "react";
import { withContextProvider } from "./withContext";

export const CounterContext = React.createContext();

export class Counter extends React.Component {
  static stateChangeTypes = {
    INPUT_ARROW_UP_KEYDOWN: "INPUT_ARROW_UP_KEYDOWN",
    INPUT_ARROW_DOWN_KEYDOWN: "INPUT_ARROW_DOWN_KEYDOWN",
    BUTTON_INC_CLICK: "BUTTON_INC_CLICK",
    BUTTON_DEC_CLICK: "BUTTON_DEC_CLICK"
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      getInputProps: this.getInputProps,
      getIncButtonProps: this.getIncButtonProps,
      getDecButtonProps: this.getDecButtonProps
    };
  }

  getInputProps = overrides => {
    return {
      onKeyDown: this.Handlers.onInputKeyDown,
      value: this.state.count,
      ...overrides
    };
  };
  getIncButtonProps = overrides => {
    return {
      onClick: this.Handlers.onIncButtonClick,
      ...overrides
    };
  };
  getDecButtonProps = overrides => {
    return {
      onClick: this.Handlers.onDecButtonClick,
      ...overrides
    };
  };

  changeCount = (changes, changeType) => {
    this.setState(
      state => {
        const newState = changes(state);
        const { stateReducer } = this.props;

        const finalState = stateReducer
          ? stateReducer(state, { ...newState, type: changeType })
          : newState;

        return finalState;
      },
      () => {
        this.props.onChange && this.props.onChange(this.state.count);
      }
    );
  };

  Helpers = {
    increment: type => () =>
      this.changeCount(
        ({ count }) => ({
          count: count + 1
        }),
        type
      ),
    decrement: type => () => {
      this.changeCount(
        ({ count }) => ({
          count: count - 1
        }),
        type
      );
    }
  };

  Handlers = {
    onInputKeyDown: e => {
      if (e.keyCode === 38) {
        this.Helpers.increment(
          Counter.stateChangeTypes.INPUT_ARROW_UP_KEYDOWN
        )();
      } else if (e.keyCode === 40) {
        this.Helpers.decrement(
          Counter.stateChangeTypes.INPUT_ARROW_DOWN_KEYDOWN
        )();
      }
    },
    onIncButtonClick: this.Helpers.increment(
      Counter.stateChangeTypes.BUTTON_INC_CLICK
    ),
    onDecButtonClick: this.Helpers.decrement(
      Counter.stateChangeTypes.BUTTON_DEC_CLICK
    )
  };
  render() {
    return this.props.children({
      ...this.state
    });
  }
}
