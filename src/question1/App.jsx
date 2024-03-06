// 1. Comment Section (3 points)
// Create a React component to manage and display a list of comments.
// Users should be able to add and remove comments. The list starts empty.

// Create an input field and an "Add" button for new comments.
// Also, include a "Remove" button next to each comment to delete it from the list.
import { useState } from "react";

function Comments() {
  // State to manage input value and comments list
  const [input, setInput] = useState("");

  //use empty array here
  const [todos, setTodos] = useState([]);

  // Function to handle input field changes
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  // Function to add a new comment to the list
  function handleAddTodo() {
    //checks if the input is not empty
    if (input.trim() !== "") {
      //Adds the new input to the todos array
      setTodos([...todos, input]);
      //Sets the input back to ""
      setInput("");
    }
  }

  // Function to delete a comment from the list based on its index
  function handleDeleteTodo(index) {
    //create a shallow copy of todos
    const newTodos = [...todos];
    //removes one element from the newTodos array starting at the  index 1
    newTodos.splice(index, 1);
    //sets the todos back to the new state
    setTodos(newTodos);
  }

  return (
    <div className="flex flex-col">
      {/* Input field for adding new comments */}
      <input value={input} onChange={handleInputChange} type="text" />

      {/* Button to add a new comment */}
      <button onClick={handleAddTodo}>Add comment</button>

      {/* List to display comments with remove buttons */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {/* Display each comment */}
            {todo}

            {/* Button to remove the corresponding comment */}
            <button onClick={() => handleDeleteTodo(index)}>
              Remove Comment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main App component that includes the Comments component
function App() {
  return (
    <div>
      <Comments />
    </div>
  );
}

// Export the App component as the default export
export default App;
