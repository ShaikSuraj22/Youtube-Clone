import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-[250px] shadow-lg">
      <div className="px-10 py-3">
        <ul className="text-gray-800 font-semibold text-lg">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
              <span>🏠</span> <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
            <span>🔥</span> <span>Shorts</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
            <span>📺</span> <span>Subscriptions</span>
          </li>
        </ul>
      </div>
      <div className="px-10 py-3">
        <ul className="text-gray-800 font-semibold text-lg">
          <li className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
            <span>⏳</span> <span>History</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
            <span>🎵</span> <span>Playlists</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
            <span>🎥</span> <span>Your Videos</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
            <span>📚</span> <span>Your Courses</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
            <span>🕒</span> <span>Watch Later</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-red-600 p-2 rounded-lg">
            <span>📌</span> <span>Your Clips</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
