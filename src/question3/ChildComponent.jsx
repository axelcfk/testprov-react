// ChildComponent that renders a dropdown list with color options.
// When a color is selected, it triggers the onChange event to update the color in the ParentComponent.

export default function ChildComponent({ setColor }) {
  return (
    <div>
      {/* Dropdown list with color options */}
      <select onChange={(e) => setColor(e.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"yellow"}>Yellow</option>
        <option value={"green"}>Green</option>
      </select>
    </div>
  );
}
