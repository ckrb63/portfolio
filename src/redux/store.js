import { configureStore } from "@reduxjs/toolkit";
import { slideSlice } from "./slideSlice";

const store = configureStore({
  reducer: {
    slideReducer: slideSlice.reducer
  }
});

export default store;
