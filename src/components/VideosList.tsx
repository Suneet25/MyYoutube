import React from "react";
import useMostPopularYTVideos from "../hooks/useMostPopularYTVideos";
import { useSelector } from "react-redux";
import useGetChannelDetails from "../hooks/useGetChannelDetails";
import YTVideoCard from "./YTVideoCard";

type Props = {};

const VideosList = (props: Props) => {
  const mostPopularYTVideos = useSelector(
    (state) => state.videosReducer.mostPopularVideos
  );
  console.log("HEHE", mostPopularYTVideos);

  useMostPopularYTVideos();
  useGetChannelDetails({ channelId: "UCn4rEMqKtwBQ6-oEwbd4PcA" });

  if (!mostPopularYTVideos) return null;
  return (
    <div className="flex flex-wrap gap-5 w-full">
      {mostPopularYTVideos?.map((video) => (
        <YTVideoCard
          key={video?.id}
          title={video?.snippet?.title}
          thumbnails={video?.snippet?.thumbnails}
          channelName={video?.snippet?.channelTitle}
          channelId={video?.snippet?.channelId}
          published={video?.snippet?.publishedAt}
          views={video?.statistics?.viewCount}
          videoId={video?.id}
        />
      ))}
    </div>
  );
};

export default VideosList;
