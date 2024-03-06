// 2. Email Update (3 points)
// Create a React component to display and update the user's email address.
// Initially, display the user's current email address.
// Next to the email address, include an "Edit" button.

// When "Edit" is clicked, show an input field to enter a new email address
// and switch the "Edit" button to a "Save" button.
// When "Save" is clicked, update the email address and display the updated address.
import { useState } from "react";

function Email() {
  // State to manage edit mode, input value, and email address
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("axelkacou@gmail.com");

  // Function to enable editing mode
  function handleEdit() {
    setEdit(true);
  }

  // Function to save the new email and exit editing mode
  function handleSave() {
    setEmail(input);
    setEdit(false);
  }

  // Function to handle input field changes
  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className="flex flex-col">
      {/* Display current email or input field based on edit mode */}
      {!edit ? (
        <p>{email}</p>
      ) : (
        <input value={input} onChange={handleInput} type="text" />
      )}

      {/* Display "Edit" or "Save" button based on edit mode */}
      {!edit ? (
        <button onClick={handleEdit}>Edit</button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
    </div>
  );
}

// Main App component that includes the Email component
function App() {
  return (
    <div>
      <Email />
    </div>
  );
}

// Export the App component as the default export
export default App;
