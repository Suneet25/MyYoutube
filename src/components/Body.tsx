import Sidebar from "./Sidebar";

import { Outlet } from "react-router";

type Props = {};

const Body = (props: Props) => {
  return (
    <div className="flex bg-black w-full">
      <div className=" ">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
