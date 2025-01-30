import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="col-span-1 shadow-lg  ">
      <div className="px-20 py-3">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="px-20 py-3">
        <ul>
          <li>History</li>
          <li>playlists</li>
          <li>Your videos</li>
          <li>Your Courses</li>
          <li>Watch Later</li>
          <li> Your Clips</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
