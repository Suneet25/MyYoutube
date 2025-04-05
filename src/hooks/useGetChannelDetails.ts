import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { URLS } from "../utils/urls";
import { setChannelDetails } from "../utils/slices/videoListSlice";

const useGetChannelDetails = ({ channelId }: { channelId: string }) => {
  const dispatch = useDispatch();

  const fetchChannelDetails = async () => {
    const videos = await fetch(URLS.YT_CHANNEL_DETAILS(channelId));
    const jsonData = await videos.json();
    if (jsonData) {
      dispatch(setChannelDetails(jsonData?.items));
    }
  };

  useEffect(() => {
    fetchChannelDetails();
  }, []);
};
export default useGetChannelDetails;
