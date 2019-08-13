import React from "react";
import { CounterContext } from "./Counter";
import Input from '@material-ui/core/InputBase';

export function CounterText() {
  const { count } = React.useContext(CounterContext);
  return <span className="count">{count}</span>;
}

export function CounterInput() {
  const { getInputProps } = React.useContext(CounterContext);
  return  <input {...getInputProps()}/>
}

export function MaterialInput() {
  const { getInputProps } = React.useContext(CounterContext);
  return  <Input {...getInputProps({className: 'input'})}/>
}