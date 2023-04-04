import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from "../store/numbers.slice";
export const store = configureStore({
  reducer: {
    numbers: numbersReducer,
  },
});
