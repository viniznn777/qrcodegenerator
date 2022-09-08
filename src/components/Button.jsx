import React from "react";

const Button = ({ ACTION, TITLE, CLASS, ID }) => {
  return (
    <button onClick={ACTION} className={CLASS} id={ID}>
      {TITLE}
    </button>
  );
};
export default Button;
