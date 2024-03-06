import { useContext } from "react";
import { colorContext } from "./ColorContext";

export default function ColorSelector() {
  const { dispatch } = useContext(colorContext);

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({ type: "addFavorite", favoriteColor: e.target.value })
        }
      >
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="red">red</option>
      </select>
    </div>
  );
}
