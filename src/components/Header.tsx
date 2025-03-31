import React from "react";
import Icon from "./common/Icon";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "../utils/slices/sideNavSlice";

type Props = {};

const Header = (props: Props) => {
  const dispatch = useDispatch();

  const handleToggleSideNav = () => {
    dispatch(toggleSideNav());
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
      <div className="col-span-8 flex w-full  text-white max-h-[40px] items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-white w-1/2 p-3 px-5 placeholder:text-[#6a665D]  rounded-l-full"
        />
        <button className=" border rounded-r-full bg-[#222222]">
          <Icon iconName="search" iconClass="p-3 " />
        </button>
        <button className=" border rounded-full bg-[#222222] ml-5">
          <Icon iconName="mic" iconClass="p-2 active" />
        </button>
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
