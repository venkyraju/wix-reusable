import React from "react";

function countReducer(state, action) {
  switch (action.type) {
    case useCounter.stateChangeTypes.INCREMENT:
      return { count: state.count + 1 };
    case useCounter.stateChangeTypes.DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function useCounter(initialCount = 0, stateReducer) {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const changes = countReducer(state, action);
      return stateReducer
        ? stateReducer(state, { ...action, changes })
        : changes;
    },
    { count: initialCount }
  );

  const increment = () =>
    dispatch({ type: useCounter.stateChangeTypes.INCREMENT });
  const decrement = () =>
    dispatch({ type: useCounter.stateChangeTypes.DECREMENT });

  return {state, increment, decrement};
}

useCounter.stateChangeTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

export default function() {
  const { state, increment, decrement } = useCounter();

  return (
    <div className="counter">
      <button type="button" onClick={decrement}>
        <span>➖</span>
      </button>
      <span className="count">{state.count}</span>
      <button type="button" onClick={increment}>
        <span>➕</span>
      </button>
    </div>
  );
}
