import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todoSlice";

//configure store

const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
});

export { store };
