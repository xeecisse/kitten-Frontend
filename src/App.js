import React from "react";
import Signup from "./Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./components/routes/AppNavigation";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
     <AppNavigation/>
    {/* <Signup /> */}
    
    </BrowserRouter>
  );
}

export default App;
