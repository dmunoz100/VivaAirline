import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Fontello.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ReservationProvider } from "./Context/ReservationContext";
import { Provider } from "react-redux";
import { store } from "./Store/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReservationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReservationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
