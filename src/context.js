import React, { createContext, useReducer } from "react";


export const ThemeContext = createContext();

const initial_state = { darkMode: false };

const themeReducer =  (state, action) => {
    switch(action.type) {
      case "TOGGLE":
        return { darkMode: !state.darkMode };
        default:
          return state;
    }
};

export const ThemeProvider = ({children})=>{
  const [state, dispatch] = useReducer(themeReducer, initial_state);

  return (
    <ThemeContext.Provider value={{state: state, dispatch:dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
};