import React from "react";

const Card = (props) => {
  return <div className={`card my-4 ${props.className}`}>{props.children}</div>;
};

export default Card;
