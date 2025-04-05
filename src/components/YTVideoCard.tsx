import React from "react";
import { useNavigate } from "react-router";

type Props = {};

const YTVideoCard = ({
  title,
  thumbnails,
  channelName,
  channelId,
  published,
  views,
  videoId,
}) => {
  const navigate = useNavigate();
  const handleVisitWatchPage = () => {
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <div
      className="rounded-lg overflow-hidden cursor-pointer"
      onClick={() => handleVisitWatchPage()}
    >
      <div>
        <img src={thumbnails?.medium?.url} alt="" />
      </div>
      <div className="flex mt-4">
        <div>
          <img src="" alt="" />
        </div>
        <p className="max-w-[300px] text-white line-clamp-2">{title}</p>
      </div>
      <p>userName</p>
      <div className="flex gap-3">
        <p className="text-[#969696]">{views}</p>
        <p className="text-[#969696]">{published}</p>
      </div>
    </div>
  );
};

export default YTVideoCard;
