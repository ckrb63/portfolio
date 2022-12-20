import { createSlice } from "@reduxjs/toolkit";

export const slideSlice = createSlice({
  name: "slide",
  initialState: {
    slideState: "slide"
  },
  reducers: {
    setStateSlide(state, action) {
      state.slideState = "slide";
    },
    setStateBack(state, action) {
      state.slideState = "back";
    }
  }
});
