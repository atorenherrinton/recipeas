/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const authenticateSlice = createSlice({
  name: "authenticate",
  initialState: {
    isAuthenticated: false,
    isSignIn: true,
    resetPassword: false,
    userId: "",
    credentials: {
      email: "",
      password: "",
      conirmPassword: "",
    },
  },
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    deauthenticate: (state) => {
      state.isAuthenticated = false;
    },
    resetCredentials: (state) => {
      state.credentials = { email: "", password: "", conirmPassword: "" };
    },
    setCredentials: (state, action) => {
      const { value, name } = action.payload;
      state.credentials = { ...state.credentials, [name]: value };
    },
    setSignIn: (state) => {
      state.isSignIn = !state.isSignIn;
    },
    setResetPassword: (state) => {
      state.resetPassword = !state.resetPassword;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const {
  authenticate,
  deauthenticate,
  resetCredentials,
  setCredentials,
  setResetPassword,
  setSignIn,
  setUserId,
} = authenticateSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIsAuthenticated = (state) =>
  state.authenticate.isAuthenticated;
export const selectCredentials = (state) => state.authenticate.credentials;
export const selectIsSignIn = (state) => state.authenticate.isSignIn;
export const selectResetPassword = (state) => state.authenticate.resetPassword;
export const selectUserId = (state) => state.authenticate.userId;

export default authenticateSlice.reducer;
