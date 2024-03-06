// Import necessary function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the question slice
const initialState = {
  question: "",
  answer: "",
};

// Create a Redux slice for managing question and answer
export const questionSlice = createSlice({
  name: "question",
  initialState,

  // Define reducers for updating state based on actions
  reducers: {
    addQuestion: (state = initialState, action) => {
      return {
        ...state,
        question: action.payload,
      };
    },
    addAnswer: (state, action) => {
      return {
        ...state,
        answer: action.payload,
      };
    },
  },
});

// Export action creators for adding question and answer
export const { addQuestion, addAnswer } = questionSlice.actions;

// Export the reducer function for the question slice
export default questionSlice.reducer;
