import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavigation from "./components/routes/AppNavigation";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar expand={"md"} dark color="dark" />
        <AppNavigation />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
