import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
  name: "videos",
  initialState: {
    mostPopularVideos: [],
    channelDetails: {},
    selectedVideo: {},
    liveChats: [],
    cacheResults: {},
  },
  reducers: {
    setMostPopularVideos: (state, action) => {
      state.mostPopularVideos = action.payload;
    },
    setChannelDetails: (state, action) => {
      state.channelDetails = action.payload;
    },
    setVideoDetails: (state, action) => {
      state.selectedVideo = action.payload;
    },
    setLiveChats: (state, action) => {
      if (state.liveChats?.length > 10) {
        state.liveChats.splice(10, 1);
      }
      state.liveChats.unshift(action.payload);
    },
    setCacheSearchResults: (state, action) => {
      Object.assign(state.cacheResults, action.payload);
    },
  },
});

export const {
  setMostPopularVideos,
  setChannelDetails,
  setVideoDetails,
  setLiveChats,
  setCacheSearchResults,
} = videoListSlice.actions;
export default videoListSlice.reducer;
