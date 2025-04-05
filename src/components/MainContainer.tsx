import { useEffect } from "react";
import { openSideNav } from "../utils/slices/sideNavSlice";
import ButtonLists from "./ButtonLists";
import VideosList from "./VideosList";
import { useDispatch } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openSideNav());
  }, []);
  return (
    <div className="flex flex-col gap-5 pr-1 w-full overflow-hidden mt-10">
      <ButtonLists />
      <VideosList />
    </div>
  );
};

export default MainContainer;
