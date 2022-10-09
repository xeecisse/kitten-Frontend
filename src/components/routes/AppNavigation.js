import React from 'react';
import { useRoutes } from 'react-router';
import Signup from '../../Signup';
// import MenuIndex from '../../Pages/Sidebar/MenuIndex';
// import Welcome from '../../Pages/Welcome';
// import Login from '../../Login';





function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <Signup />,
    },
    // {
    //   path: '/welcome',
    //   element: <MenuIndex />,

    //   children: [
    //     { path: '/welcome', element: <Welcome /> },
      
    //   ],
    // },
  ]);
  return element;
}

export default AppNavigation;
