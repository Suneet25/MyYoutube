import React from "react";
import Sidebar from "./Sidebar";
import VideosList from "./VideosList";

type Props = {};

const Body = (props: Props) => {
  return (
    <div className="flex ">
      <div className=" ">
        <Sidebar />
      </div>
      <div>
        <VideosList />
      </div>
    </div>
  );
};

export default Body;
