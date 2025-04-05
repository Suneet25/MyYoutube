import { useEffect } from "react";
import { URLS } from "../utils/urls";
import { useDispatch } from "react-redux";
import { setMostPopularVideos } from "../utils/slices/videoListSlice";

const useSearchByQuery = ({ query }: { query: string }) => {
  const dispatch = useDispatch();

  const fetchVideosByQuery = async () => {
    const videos = await fetch(URLS.YT_VIDEOS_BY_SEARCH_QUERY(query));
    const jsonData = await videos.json();
    if (jsonData) {
      dispatch(setMostPopularVideos(jsonData?.items));
    }
  };

  //   useEffect(() => {
  //     fetchVideosByQuery();
  //   }, []);

  return fetchVideosByQuery;
};

export default useSearchByQuery;
