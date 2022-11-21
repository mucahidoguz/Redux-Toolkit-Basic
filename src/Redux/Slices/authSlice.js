import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {},
    removeToken: (state, action) => {},
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
