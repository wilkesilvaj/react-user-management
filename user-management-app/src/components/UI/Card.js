import React from "react";

const Card = (props) => {
  return <div className="card my-4 p-2">{props.children}</div>;
};

export default Card;
