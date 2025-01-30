import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return <div>Loading...</div>;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-[250px] h-[300p] px-5 py-5 ml-3 shadow-lg shadow-gray-300 rounded-lg">
      <img className="  rounded-md" src={thumbnails?.medium?.url} alt="" />
      <ul className="flex flex-col justify-center text-center">
        <li className="font-bold text-left">{title}</li>
        <li>{channelTitle}</li>
        <li>
          Views: {statistics?.viewCount} likes:{statistics.likeCount}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
