import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from './components/routes/AppNavigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppNavigation />
    </BrowserRouter>
  );
}

export default App;
