import React from "react";
import { SIDE_NAV_DATA } from "../utils/constants";
import Icon from "./common/Icon";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

type Props = {};

const Sidebar = (props: Props) => {
  const { pathname } = useLocation();
  const isSideNavOpen = useSelector(
    (state) => state?.sideNavReducer?.isSideNavOpen
  );

  return (
    <div
      className={`text-white p-5 ${
        pathname === "/watch" && !isSideNavOpen && "hidden"
      }`}
    >
      <div className="flex flex-col items-start justify-center gap-6">
        {SIDE_NAV_DATA?.primary?.map((navItem) => (
          <Link
            to={navItem?.direction}
            key={navItem.id}
            className={`flex items-center gap-4 justify-center text-white ${
              !isSideNavOpen
                ? "flex-col items-start gap-2 justify-center"
                : "flex-row"
            }`}
          >
            <Icon iconName={navItem?.icon} iconClass="mt-2" />
            <p className={`${!isSideNavOpen && "text-xs"}`}>{navItem?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
