import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./components/routes/AppNavigation";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";


function App() {
  return (
    <BrowserRouter >
      <Navbar expand={'md'} dark color='dark' />
     <AppNavigation/>
    
    </BrowserRouter>
  );
}

export default App;
