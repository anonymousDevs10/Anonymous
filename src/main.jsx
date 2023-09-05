import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import actionsSliceReducer from "./Features/Actions.jsx";

const store = configureStore({
  reducer: {
    actions: actionsSliceReducer,
  },
});

ReactDOM.createRoot(document.getElementById("mobile")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
