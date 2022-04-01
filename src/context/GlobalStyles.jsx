import { createContext, useReducer } from "react";
import { initialState } from "./Reducer";
import { reducer } from "./Reducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteBtn = (id) => {
    dispatch({ type: "DELETE_BUTTON", payload: id });
  };

  return (
    <GlobalContext.Provider value={(state, deleteBtn)}>
      {children}
    </GlobalContext.Provider>
  );
};
