import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./formSlice";
import { formStatusReducer } from "./formStatusSlice";

export const store = configureStore({
  reducer: { form: formReducer, formStatus: formStatusReducer },
})
