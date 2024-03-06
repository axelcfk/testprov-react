// Import necessary function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./QuestionSlice";

// Configure Redux store with the question reducer
export const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});

// Log the store object to the console
console.log(store);

// Export the configured Redux store
export default store;
