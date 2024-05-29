import React, { useReducer, createContext } from "react";

export const AppReducer = (state, action) => {
  switch (action.type) {
  }
};

const initialState = {
  history: Array(9).fill(null),
  xIsNext: false,
  currentMove: 0,
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        history: state.history,
        xIsNext: state.xIsNext,
        currentMove: state.currentMove,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
