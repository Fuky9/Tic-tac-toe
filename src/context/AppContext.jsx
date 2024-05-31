import React, { useReducer, createContext } from "react";

export const AppReducer = (state, action) => {
  switch (action.type) {

    case "MARK-SQUARE":
      //If the field is not empty return state, else update the history array with new value based on xIsNext
      if (state.history[action.payload] !== null) {
        return state;
      } return {
        ...state,
        xIsNext: !state.xIsNext,
        currentMove: state.currentMove + 1,
        status: state.xIsNext ? "Next player: X" : "Next player: O",
        history: state.history.map((value, index) => {
          if (index === action.payload) {
            return state.xIsNext ? "O" : "X";
          } return value;
        })
      };
      default:
      return state;
    }
  };



const initialState = {
  history:Array(9).fill(null),
  xIsNext: false,
  currentMove: 0,
  status: "Next player: X"
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
        status: state.status,
        dispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
