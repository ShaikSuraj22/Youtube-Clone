import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-4 p-4 shadow-lg h-15 ">
      <div className="flex col-span-2 justify-cente h-full">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          alt="Hamburger"
        />
        <img
          className="h-9 mx-1"
          src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
          alt=""
        />
      </div>
      <div className="col-span-8 flex justify-center">
        <input
          type="text"
          className="h-6 w-2xs border border-gray-400 rounded-l-full"
        />
        <button className=" h-6 border w-20 border-gray-400 rounded-r-full bg-green-300">
          Search
        </button>
      </div>
      <div className="col-span-2 flex justify-center">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
