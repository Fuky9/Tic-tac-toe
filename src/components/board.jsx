import { useContext } from "react";
import Square from "./square";
import { AppContext } from "../context/AppContext";

const Board = () => {
  const {history, dispatch} = useContext(AppContext);

  const handleSquareClick = (index) => {
    dispatch({type: "MARK-SQUARE", payload: index})
  }

  return (
    <div className="board-3x3">
      {history.map((value, index) =>{
        return (
          <Square
          id={index}
          key={index}
          value={value}
          onClick={() => handleSquareClick(index)}
          />
        )
      })}

    </div>
  );
};

export default Board;
