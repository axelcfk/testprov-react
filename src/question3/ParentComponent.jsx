// 3. Choose Favorite Color via Dropdown (3 points)
// Create two React components: ParentComponent and ChildComponent.
// ChildComponent should contain a dropdown list (select in HTML) where
// the user can choose their favorite color.
// When a color is selected, send this choice to ParentComponent through a callback function.
// ParentComponent should display the user's chosen favorite color.

// Import necessary dependencies and ChildComponent.
import { useState } from "react";
import ChildComponent from "./ChildComponent";

// In ChildComponent, implement a <select> element with some color options.
// Use a callback function to notify ParentComponent about the user's choice.
// ParentComponent should receive and display the selected color option.

function App() {
  // State to manage the selected color
  const [color, setColor] = useState("");

  // Callback function to set the selected color in the ParentComponent state
  function handleSetColor(color) {
    setColor(color);
  }

  return (
    <div>
      {/* Render ChildComponent and pass the callback function and color state */}
      <ChildComponent handleSetColor={handleSetColor} setColor={setColor} />

      {/* Display the user's chosen color */}
      <h1>Your chosen color is: {color}</h1>
    </div>
  );
}

// Export the App component as the default export
export default App;
