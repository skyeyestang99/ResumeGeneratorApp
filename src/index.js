import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"),<App />);
console.log("test");
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
)