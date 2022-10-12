import React from 'react'
import { useRoutes } from 'react-router'
import Signup from '../../Signup'
// import MenuIndex from '../../Pages/Sidebar/MenuIndex';
// import Welcome from '../../Pages/Welcome';
import Login from '../../Login'
import GeneralModels from '../../GeneralModels'
import Model from '../../Model'

function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',

      element: <Signup />,
    },
    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/general-models',
      element: <GeneralModels />,
    },
  ])
  return element
}

export default AppNavigation
