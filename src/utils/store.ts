import { configureStore } from "@reduxjs/toolkit";
import sideNavSlice from "./slices/sideNavSlice";
import videosSlice from "./slices/videoListSlice";

export const store = configureStore({
  reducer: {
    sideNavReducer: sideNavSlice,
    videosReducer: videosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
