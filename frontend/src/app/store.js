import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/songs/songSlice";
import emailReducer from "../features/email/emailSlice";

export const store = configureStore({
  reducer: { songs: songReducer, email: emailReducer },
});
