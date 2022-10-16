import React from 'react'
import { useRoutes } from 'react-router'
import Signup from '../../pages/auth/Signup'
// import MenuIndex from '../../Pages/Sidebar/MenuIndex';
// import Welcome from '../../Pages/Welcome';
import Login from '../../pages/auth/Login'
import GeneralModels from '../../pages/GeneralModels'
import Model from '../../pages/Model'
import Profile from '../../pages/profile/Profile'

function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',

      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/general-models',
      element: <GeneralModels />,
    },
    {
      path: '/profile',
      element: <Profile/>,
    },
      // {
      //   path: '/gigs',
      //   element: <Gigs  />,
      // },
  ])
  return element
}

export default AppNavigation
