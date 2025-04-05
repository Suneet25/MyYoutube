import React, { useState } from "react";
import Icon from "./common/Icon";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideNav } from "../utils/slices/sideNavSlice";
import { URLS } from "../utils/urls";
import {
  setCacheSearchResults,
  setMostPopularVideos,
} from "../utils/slices/videoListSlice";

type Props = {};

const Header = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searhResults, setSearchResults] = useState([]);
  const [showSearchList, setShowSearchList] = useState(true);
  const dispatch = useDispatch();
  const cacheResults = useSelector((state) => state.videosReducer.cacheResults);
  const handleToggleSideNav = () => {
    dispatch(toggleSideNav());
  };
  const fetchVideosByQuery = async (query) => {
    const videos = await fetch(URLS.YT_VIDEOS_BY_SEARCH_QUERY(query));
    const jsonData = await videos.json();
    if (jsonData) {
      dispatch(
        setCacheSearchResults({
          [searchQuery]: jsonData?.items,
        })
      );
      return jsonData?.items;
    }
  };
  const handleSearchByQuery = () => {
    setShowSearchList(true);
    if (cacheResults?.[searchQuery]) {
      setSearchResults(cacheResults?.[searchQuery]);
    } else {
      const fetchedResults = fetchVideosByQuery(searchQuery);
      setSearchResults(fetchedResults);
    }
  };

  return (
    <div className="grid grid-flow-col items-center grid-cols-12 bg-black px-4 py-2 w-full max-h-[96px]">
      <div className="col-span-2 flex items-center cursor-pointer">
        <div onClick={handleToggleSideNav}>
          <Icon iconName="menu" iconClass="text-white" />
        </div>
        <div className="w-28">
          <img
            src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg"
            alt="youtube-logo"
            className="w-full bg-black"
          />
        </div>
      </div>
      <div className="col-span-8 flex flex-col relative">
        <div className=" flex w-full  text-white max-h-[40px] items-center justify-center">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="border border-white w-1/2 p-3 px-5 placeholder:text-[#6a665D]  rounded-l-full"
            onFocus={() => setShowSearchList(true)}
            onBlur={() => setShowSearchList(false)}
          />
          <button
            className=" border rounded-r-full bg-[#222222]"
            onClick={handleSearchByQuery}
          >
            <Icon iconName="search" iconClass="p-3 " />
          </button>
          <button className=" border rounded-full bg-[#222222] ml-5">
            <Icon iconName="mic" iconClass="p-2 active" />
          </button>
        </div>
        {!!searhResults?.length && showSearchList && !!searchQuery && (
          <div className="max-h-[500px] mt-1 bg-[#272727] z-10 w-1/2  rounded-t-lg absolute top-11 left-[20%] overflow-y-scroll no-scrollbar p-4">
            {searhResults?.map((searchItem) => (
              <div className="flex items-center justify-start gap-4">
                <Icon iconName="history" iconClass="mt-2 text-white" />
                <p className="font-medium line-clamp-1 text-white">
                  {searchItem?.snippet?.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-2 flex items-center justify-center text-white gap-4">
        <div className="flex items-center justify-center gap-2 bg-[#222222] px-4 py-1 rounded-full">
          <Icon iconName="add" iconClass="mt-2" />
          <p className="text-md font-medium">Create</p>
        </div>
        <div>
          <Icon iconName="notifications" iconClass="mt-1" />
        </div>
        <div>
          <Icon iconName="account_circle" iconClass="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
