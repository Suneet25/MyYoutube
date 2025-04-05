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
    openSideNav: (state) => {
      state.isSideNavOpen = true;
    },
  },
});

export default sideNavSlice.reducer;
export const { toggleSideNav, closeSideNav, openSideNav } =
  sideNavSlice.actions;
