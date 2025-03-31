import { configureStore } from "@reduxjs/toolkit";
import sideNavSlice from "./slices/sideNavSlice";

export const store = configureStore({
  reducer: {
    sideNavReducer: sideNavSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
