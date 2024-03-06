// Import React and Redux dependencies
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "./QuestionSlice";

// Functional component for the Question section
export default function QuestionComponent() {
  // Get dispatch function from Redux
  const dispatch = useDispatch();

  // Define local state for input value
  const [inputValue, setInputValue] = useState("");

  // Access question state from Redux store
  const question = useSelector((state) => state.question.question);
  console.log(question);

  // Function to handle sending a question
  function handleSendQuestion() {
    dispatch(addQuestion(inputValue));
  }

  // Render input field, button, and display the input value
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={handleSendQuestion}>Send</button>
      <p>{inputValue}</p>
    </div>
  );
}
