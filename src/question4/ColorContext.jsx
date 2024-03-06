import { createContext, useContext, useReducer } from "react";

export const colorContext = createContext();

const initialState = {
  favoriteColor: "",
};

function colorReducer(state = initialState, action) {
  switch (action.type) {
    case "addFavorite": {
      return {
        ...state,
        favoriteColor: action.favoriteColor,
      };
    }
    default:
      return state;
  }
}

export function ColorProvider({ children }) {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <colorContext.Provider value={{ state, dispatch }}>
      {children}
    </colorContext.Provider>
  );
}

export function useColor() {
  return useContext(colorContext);
}
