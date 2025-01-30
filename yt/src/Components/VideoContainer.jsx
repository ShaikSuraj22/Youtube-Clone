import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    console.log(json.items);
    setvideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((vid) => {
        const videoId = vid.id.videoId || vid.id; // Extracting videoId properly
        return (
          <Link to={"/watch?v=" + videoId} key={videoId}>
            <VideoCard info={vid} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
