import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/form.slice';

export default configureStore({
  reducer: {
    form: formReducer,
    recipe: formReducer,
  },
});
