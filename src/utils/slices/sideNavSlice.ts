import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
  name: "sidenav",
  initialState: {
    isSideNavOpen: true,
  },
  reducers: {
    toggleSideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    closeSideNav: (state) => {
      state.isSideNavOpen = false;
    },
  },
});

export default sideNavSlice.reducer;
export const { toggleSideNav } = sideNavSlice.actions;
