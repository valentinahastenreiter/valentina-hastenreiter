import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "./context";


ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeContext.Provider > */}
    <App />
    {/* </ThemeContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);