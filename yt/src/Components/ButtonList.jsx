import React, { useState } from "react";
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
  "Sports",
  "Technology",
  "Comedy",
  "Fashion",
  "Travel",
  "Food",
  "Vlogs",
  "Fitness",
  "Pets",
  "Education",
  "Books",
  "Art",
  "Tech Reviews",
];

const ButtonList = () => {
  // State to manage the starting index of visible categories
  const [startIndex, setStartIndex] = useState(0);
  const visibleCategories = list.slice(startIndex, startIndex + 7);

  // Handle the scrolling to the left or right
  const handleScroll = (direction) => {
    if (direction === "right" && startIndex + 7 < list.length) {
      setStartIndex(startIndex + 7);
    } else if (direction === "left" && startIndex > 0) {
      setStartIndex(startIndex - 7);
    }
  };

  return (
    <div className="relative py-4 flex items-center justify-center space-x-4">
      {/* Left Scroll Button */}
      <button
        className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center absolute left-0 z-10 cursor-pointer hover:bg-gray-300 transition-all duration-200"
        onClick={() => handleScroll("left")}
        disabled={startIndex === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Category List with Horizontal Scrolling */}
      <div className="flex space-x-4 overflow-hidden">
        {visibleCategories.map((category, index) => (
          <Button key={index} name={category} />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center absolute right-0 z-10 cursor-pointer hover:bg-gray-300 transition-all duration-200"
        onClick={() => handleScroll("right")}
        disabled={startIndex + 7 >= list.length}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonList;
