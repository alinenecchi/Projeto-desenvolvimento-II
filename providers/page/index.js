import React from 'react';

const DEFAULT_VALUES = {
  status: 'pending',
  counter: 9,
  data: {
    ping: 'wating'
  }
};

// The reducer is used to update values for the context
const reducer = (state, action) => {
  switch (action.type) {
  case "reset":
    return DEFAULT_VALUES;
  case "update":
    return { ...state, ...action.data };
  default:
    return state;
  }
};

// CREATING THE CONTEXT
const PageContext = React.createContext(DEFAULT_VALUES);

// CREATING THE PROVIDER
export const PageProvider = (props) => {

  const { children } = props;

  let [state, dispatch] = React.useReducer(reducer, DEFAULT_VALUES);
  let value = { state, dispatch };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export { PageContext };
