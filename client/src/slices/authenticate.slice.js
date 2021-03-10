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
    isEmailSent: false,
    errorMessage: "",
  },
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    deauthenticate: (state) => {
      state.isAuthenticated = false;
    },
    resetCredentials: (state) => {
      state.credentials = {
        ...state.credentials,
        password: "",
        conirmPassword: "",
      };
    },
    resetErrorMessage: (state) => {
      state.errorMessage = "";
    },
    setCredentials: (state, action) => {
      const { value, name } = action.payload;
      state.credentials = { ...state.credentials, [name]: value };
    },
    setIsEmailSent: (state, action) => {
      state.isEmailSent = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
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
  resetErrorMessage,
  setErrorMessage,
  setIsEmailSent,
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
export const selectIsEmailSent = (state) => state.authenticate.isEmailSent;
export const selectErrorMessage = (state) => state.authenticate.errorMessage;
export const selectIsSignIn = (state) => state.authenticate.isSignIn;
export const selectResetPassword = (state) => state.authenticate.resetPassword;
export const selectUserId = (state) => state.authenticate.userId;

export default authenticateSlice.reducer;
