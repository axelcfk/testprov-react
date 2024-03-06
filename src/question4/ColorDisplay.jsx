import { useContext } from "react";
import { colorContext } from "./ColorContext";

export default function ColorDisplay() {
  const { state } = useContext(colorContext);
  return (
    <div>
      <p>{state.favoriteColor}</p>
    </div>
  );
}
