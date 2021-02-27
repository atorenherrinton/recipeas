/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    isActive: false,
    isUrl: false,
    isValidated: true,
  },
  reducers: {
    activateForm: (state) => {
      state.isActive = true;
    },
    activateUrl: (state) => {
      state.isUrl = true;
    },
    deactivateForm: (state) => {
      state.isActive = false;
    },
    deactivateUrl: (state) => {
      state.isUrl = false;
    },
    validateForm: (state) => {
      state.isValidated = true;
    },
    invalidateForm: (state) => {
      state.isValidated = false;
    },
  },
});

export const {
  activateForm,
  activateUrl,
  deactivateForm,
  deactivateUrl,
  validateForm,
  invalidateForm,
} = formSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIsFormActive = (state) => state.form.isActive;
export const selectIsUrl = (state) => state.form.isUrl;
export const selectIsValidated = (state) => state.form.isValidated;

export default formSlice.reducer;
