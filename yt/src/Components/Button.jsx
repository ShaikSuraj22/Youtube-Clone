import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="m-3 px-4 py-1 bg-gray-300 rounded-xl"> {name}</button>
    </div>
  );
};

export default Button;
