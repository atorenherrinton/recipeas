/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    ingredientExists: false,
    ingredient: "",
    fractions: {
      "1/4": "¼",
      "1/3": "⅓",
      "1/2": "½",
      "2/3": "⅔",
      "3/4": "¾",
    },
    fullRecipe: {
      imageUrl: "",
      title: "",
      description: "",
      ingredients: [],
      directions: "",
    },
  },
  reducers: {
    addIngredient: (state) => {
      if (
        state.ingredient.length > 0 &&
        !state.fullRecipe.ingredients.includes(state.ingredient)
      ) {
        state.fullRecipe.ingredients = [
          ...state.fullRecipe.ingredients,
          state.ingredient,
        ];
        state.ingredient = "";
      } else if (state.fullRecipe.ingredients.includes(state.ingredient)) {
        state.ingredientExists = true;
      }
      document.querySelector("#ingredients").value = "";
    },
    deleteIngredient: (state, action) => {
      state.fullRecipe.ingredients = [
        ...state.fullRecipe.ingredients.filter(
          (ingredient) => ingredient !== action.payload
        ),
      ];
    },
    resetIngredient: (state) => {
      state.ingredient = "";
    },
    resetIngredientExists: (state) => {
      state.ingredientExists = false;
    },
    setIngredient: (state, action) => {
      state.ingredient = action.payload.value;
      for (const [key, value] of Object.entries(state.fractions)) {
        if (state.ingredient.includes(key)) {
          state.ingredient = state.ingredient.replace(key, value);
        }
      }
    },
    setHovered: (state) => {
      state.item.isHovered = !state.item.isHovered;
    },
    setUrl: (state, action) => {
      const { value, name } = action.payload;
      state.fullRecipe = {
        ...state.fullRecipe,
        [name]: "https://" + value.replace("https://", ""),
      };
    },
    setFullRecipe: (state, action) => {
      const { value, name } = action.payload;
      state.fullRecipe = { ...state.fullRecipe, [name]: value };
    },
    clearForm: (state) => {
      state.ingredient = "";
      state.fullRecipe = {
        imageUrl: "",
        title: "",
        description: "",
        ingredients: [],
        directions: "",
      };
    },
  },
});

export const {
  addIngredient,
  deleteIngredient,
  setIngredient,
  setUrl,
  resetIngredient,
  resetIngredientExists,
  setFullRecipe,
  clearForm,
} = inputSlice.actions;

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
export const selectIngredient = (state) => state.input.ingredient;
export const selectIngredients = (state) => state.input.fullRecipe.ingredients;
export const selectFullRecipe = (state) => state.input.fullRecipe;
export const selectIngredientExists = (state) => state.input.ingredientExists;

export default inputSlice.reducer;
