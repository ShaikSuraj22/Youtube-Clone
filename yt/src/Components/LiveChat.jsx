import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { getRandomName, getRandomStrings } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chateMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomStrings(20),
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" flex flex-col-reverse ml-3 border border-black p-3 w-[350px] h-[400px] bg-gray-200 rounded-lg overflow-y-scroll">
        {chateMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="mx-3 p-3 border border-black w-[350px] "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "SurajBaba",
              message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-l-black p-1"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />{" "}
        <button className="p-2 ml-2 bg-green-200 w-20 rounded-lg ">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
