import React from "react";
import { withContextProvider } from "./withContext";
import { Counter, CounterContext } from "./Counter";
import { CounterText, CounterInput, MaterialInput } from "./Count";
import { CounterIncButton, CounterDecButton, MaterialIncButton, MaterialDecButton } from "./Buttons";
import './Counter.scss'

export const FinalCounter = withContextProvider(CounterContext.Provider)(
  Counter
);
FinalCounter.IncButton = CounterIncButton;
FinalCounter.DecButton = CounterDecButton;
FinalCounter.Text = CounterText;
FinalCounter.Input = CounterInput;
FinalCounter.MaterialIncButton = MaterialIncButton;
FinalCounter.MaterialDecButton = MaterialDecButton;
FinalCounter.MaterialInput = MaterialInput;
  //TODO: use hoist non react statics
  FinalCounter.stateChangeTypes = Counter.stateChangeTypes

export default function() {
  return (
    <FinalCounter stateReducer={fastButtons}>
      <FinalCounter.MaterialDecButton />
      <FinalCounter.MaterialInput />
      <FinalCounter.MaterialIncButton />
    </FinalCounter>
  );
}


const fastButtons = (state, changes) => {
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