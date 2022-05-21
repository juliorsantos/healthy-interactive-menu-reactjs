import { createContext, useContext, useReducer } from "react";

const DEFAULT_STATE = {
  app: [],
  cart: []
}

const Context = createContext(DEFAULT_STATE);

const ContextWrapper = ({ children, ...rest }) => {
  return (
    <Context.Provider {...rest}>
      {children}
    </Context.Provider>
  )
}

export {
  Context,
  ContextWrapper
}