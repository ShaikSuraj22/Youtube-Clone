import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setShowsuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    // make a api call for every key press
    // but if the differnece b/w 2 api calls is <200ms
    //  decline the api

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // setSearchQuery(json);
    // console.log(json[1]);
    setsuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
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
        <div className="relative">
          <div className="flex">
            <input
              type="text"
              className="h-10 w-64 border p-3 border-gray-400 rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowsuggestions(true)}
              onBlur={() => setShowsuggestions(false)}
            />
            <button className="h-10 w-20 border border-gray-400 rounded-r-full bg-green-300">
              Search
            </button>
          </div>
          {showsuggestions && (
            <div className="absolute left-0 mt-1 w-64 bg-gray-100 border border-gray-400 rounded-md shadow-lg z-10">
              <ul className="p-3">
                {suggestions.map((s) => (
                  <li key={s} className="p-1 hover:bg-gray-200 cursor-pointer">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
