import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});
