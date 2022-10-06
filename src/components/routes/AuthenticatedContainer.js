import React from 'react';
import Navbar from '../Navbars/MainNavbar';
// import AuthWrapper from './AuthWrapper'
import {
  // Route, Routes, useRoutes,
  Outlet,
} from 'react-router-dom';
// import RecordsIndex from '../../pages/records'

function AuthenticatedContainer() {
  return (
    <div className="" style={{ height: '100vh' }}>
      <Navbar />
      <div style={{ height: 52 }} />
      <Outlet />
      {/* <Routes>
        
        <Route path="records" element={<RecordsIndex />} />
      </Routes> */}
    </div>
  );
}

export default AuthenticatedContainer;
