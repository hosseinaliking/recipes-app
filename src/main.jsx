import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//* React router dom *//
import { BrowserRouter } from "react-router-dom";

//* Redux *//
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
