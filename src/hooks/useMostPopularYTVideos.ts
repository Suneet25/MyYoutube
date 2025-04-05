import { useEffect } from "react";
import { URLS } from "../utils/urls";
import { useDispatch } from "react-redux";
import { setMostPopularVideos } from "../utils/slices/videoListSlice";

const useMostPopularYTVideos = () => {
  const dispatch = useDispatch();

  const fetchMostPopularYTVideos = async () => {
    const videos = await fetch(URLS.YT_MOST_POPULAR_VIDEOS);
    const jsonData = await videos.json();
    if (jsonData) {
      dispatch(setMostPopularVideos(jsonData?.items));
    }
  };

  useEffect(() => {
    fetchMostPopularYTVideos();
  }, []);
};

export default useMostPopularYTVideos;
