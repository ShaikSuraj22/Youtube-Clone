import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const [searchparams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <div className="col-span-11 px-5 py-5 flex ">
        <div>
          <iframe
            width="700"
            height="400"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watchpage;
