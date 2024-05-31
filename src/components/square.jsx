import React from "react";

const Square = (props) => {
  return <div className="square" id={props.id} onClick={props.onClick}>{props.value}</div>;
};

export default Square;
