import React from "react";

export const withContextProvider = ContextProvider => RenderPropComponent => (
  props = {}
) => {
  const { children, ...otherProps } = props;
  return (
    <RenderPropComponent {...otherProps}>
      {counter => <ContextProvider value={counter}>{children}</ContextProvider>}
    </RenderPropComponent>
  );
};
