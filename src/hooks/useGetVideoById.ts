import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { URLS } from "../utils/urls";
import { setVideoDetails } from "../utils/slices/videoListSlice";

const useGetVideoById = ({ videoId }: { videoId: string | null }) => {
  const dispatch = useDispatch();

  const fetchVideoById = async () => {
    const videos = await fetch(URLS.YT_VIDEO_BY_ID(videoId));
    const jsonData = await videos.json();
    if (jsonData) {
      dispatch(setVideoDetails(jsonData?.items?.[0]));
    }
  };

  useEffect(() => {
    fetchVideoById();
  }, []);
};
export default useGetVideoById;
