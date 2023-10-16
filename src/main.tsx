import "@adorable.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/configStore.ts";
import "./index.css";
import mockServer from "./test/mockServer.ts";

// if (import.meta.env.MODE !== "production") {
//   console.log("Running in development mode");
//   mockServer({ environment: import.meta.env.MODE });
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
