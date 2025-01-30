import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Masala",
  "Gaming",
  "Movies",
  "Series",
  "Live",
  "News",
  "Telugu",
  "Hindi",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {list.map((category, index) => (
        <Button key={index} name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
