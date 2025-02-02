import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center mt-2">
      <img
        className="h-6 border rounded-full"
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
        alt=""
      />
      <span className="ml-2 font-bold text-[12px]">{name}</span>
      <span className="ml-2 text-[15px]">{message}</span>
    </div>
  );
};

export default ChatMessage;
