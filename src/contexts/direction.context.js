import React, { createContext, useReducer } from "react";
import reducer from "../reducers/direction.reducer";

export const DirectionContext = createContext();
export const DispatchContext = createContext();

export const DirectionProvider = ({ children, initialState = {} }) => {
  const [directions, dispatch] = useReducer(reducer, initialState);

  return (
    <DirectionContext.Provider value={directions}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </DirectionContext.Provider>
  );
};
