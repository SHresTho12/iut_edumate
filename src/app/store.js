import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
// import threadReducer from "../features/counter/threadSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // thread: threadReducer,
  },
});
