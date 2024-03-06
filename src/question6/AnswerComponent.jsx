// Import necessary dependencies from React and Redux
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "./QuestionSlice";
import { useState } from "react";

// Functional component for the Answer section
export default function AnswerComponent() {
  // Define local state for input value
  const [inputValue, setInputValue] = useState("");
  
  // Access answer state from Redux store
  const answer = useSelector((state) => state.question.answer);

  // Get dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle sending an answer
  function handleSendAnswer() {
    dispatch(addAnswer(inputValue));
  }

  // Render input field, button, and display the input value
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleSendAnswer}>Answer</button>
      <p>{inputValue}</p>
    </div>
  );
}
