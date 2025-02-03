import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchInput === "") {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSuggestions(searchCache[searchInput]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchInput);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchInput]: json[1] }));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setShowSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col m-4 p-4 shadow-lg h-16 relative bg-white">
      <div className="flex col-span-2 justify-center h-full items-center">
        <img
          onClick={() => dispatch(toggleMenu())}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          alt="Hamburger"
        />
        <img
          className="h-9 mx-2"
          src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
          alt="Logo"
        />
      </div>

      {/* Search Box */}
      <div className="col-span-8 flex justify-center items-center">
        <div className="relative w-full max-w-lg">
          <div className="flex w-full">
            <input
              type="text"
              className="h-10 w-full p-4 border-2 border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click event
              placeholder="Search"
            />
            <button
              className="h-10 px-6 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none transition-colors duration-200"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-12 left-0 w-full max-w-lg bg-white border border-gray-300 shadow-lg rounded-md z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-3 hover:bg-blue-100 cursor-pointer transition-colors duration-200"
                  onClick={() => {
                    setSearchInput(suggestion);
                    setShowSuggestions(false);
                    setSearchQuery(suggestion);
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
