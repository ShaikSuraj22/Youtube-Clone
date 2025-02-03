import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredVideos(
        videos.filter((video) =>
          video.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredVideos(videos);
    }
  }, [searchQuery, videos]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
    setFilteredVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {filteredVideos.map((vid) => {
        const videoId = vid.id.videoId || vid.id;
        return (
          <Link to={`/watch?v=${videoId}`} key={videoId}>
            <VideoCard info={vid} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
