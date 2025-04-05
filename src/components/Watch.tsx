import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router";
import useGetVideoById from "../hooks/useGetVideoById";
import { useDispatch, useSelector } from "react-redux";
import { closeSideNav } from "../utils/slices/sideNavSlice";
import useGetChannelDetails from "../hooks/useGetChannelDetails";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const Watch = (props: Props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isSideNavOpen = useSelector(
    (state) => state?.sideNavReducer?.isSideNavOpen
  );

  const selectedVideo = useSelector(
    (state) => state.videosReducer.selectedVideo
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const channelId = selectedVideo?.snippet?.channelId ?? "";
  useGetVideoById({ videoId });
  useGetChannelDetails({ channelId });
  useEffect(() => {
    dispatch(closeSideNav());
  }, []);
  return (
    <div
      className={`w-full mt-10 ${
        pathname === "/watch" && !isSideNavOpen ? "px-20" : "px-0"
      }`}
    >
      <div className="flex justify-center items-start gap-2">
        <div className="w-3/4 ">
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${selectedVideo?.id}?si=vD8l6B_I0NbpxoUj&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/4">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentSection />
      </div>
    </div>
  );
};

export default Watch;
