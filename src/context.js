import { createContext, useReducer } from "react/cjs/react.development";

export const ThemeContext = createContext();

const initialState = { darkMode: false };

const themeReducer =  (state, action) => {
    switch(action.type) {
      case "TOGGLE":
        return{ darkMode: !state.darkMode };
        default:
          return state;
    }
};

export const ThemeProvider = ({children})=>{
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{state: state, dispatch: dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
};