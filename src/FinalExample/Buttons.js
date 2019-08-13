import React from "react";
import { CounterContext } from "./Counter";
import Button from "@material-ui/core/Button";
import PlusIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Remove";

export function CounterIncButton() {
  const { getIncButtonProps } = React.useContext(CounterContext);
  return (
    <button type="button" {...getIncButtonProps()}>
      <span>+</span>
    </button>
  );
}

export function CounterDecButton() {
  const { getDecButtonProps } = React.useContext(CounterContext);

  return (
    <button type="button" {...getDecButtonProps()}>
      <span>-</span>
    </button>
  );
}

export function MaterialIncButton(props) {
  const { getIncButtonProps } = React.useContext(CounterContext);
  return (
    <Button color="primary" variant="contained" {...getIncButtonProps()}>
      <PlusIcon />
      {props.children}
    </Button>
  );
}

export function MaterialDecButton(props) {
  const { getDecButtonProps } = React.useContext(CounterContext);
  return (
    <Button color="primary" variant="contained" {...getDecButtonProps()}>
      <MinusIcon />
      {props.children}
    </Button>
  );
}
