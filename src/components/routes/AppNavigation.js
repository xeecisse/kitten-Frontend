import React from 'react';
import { useRoutes } from 'react-router';
import AddNew from '../../AddNew';
import Page from '../../Page';
import MenuIndex from '../../Pages/Sidebar/MenuIndex';
import Welcome from '../../Pages/Welcome';
// import Biodata from "../../Biodata";
import Warrant from '../../Warrant';
import SentenceImformation from '../../SentenceImformation';
import View from '../../view'
import Prints from '../../Prints';
import Notification from '../../Notification';
import Manageusers from '../../Manageusers';
import CreateNewUser from '../../CreateNewUsers';
import ViewUser from './ViewUser';
import Login from '../../Login';
import ViewATP from '../../ViewATP';
import ViewConvict from '../../ViewConvict';
import Viewdebtor from '../../Viewdebtor';
import ViewTransferIn from '../../ViewTransferIn';
import ViewLodger from '../../ViewLodger';
import ViewLunatic from '../../ViewLunatic';
import ViewLunaticAmputee from '../../ViewLunaticAmputee';
import ViewIDR from './ViewIDR';
import Profile from '../../Profile';





function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <Login />,
      children:[{index:true}],
    },{
      path: '/welcome',
      element: <MenuIndex />,

      children: [
        { path: '/welcome', element: <Welcome /> },
        {
          path: 'home/add-new-inmate',
          element: <AddNew />,
          children: [
            { path: 'sentence', element: <SentenceImformation /> },
            { path: 'warrant', element: <Warrant /> },

          ],
        },
        { path: 'home', element: <Page /> },
        { path: 'home', element: <Profile /> },
        { path: 'home/view-inmate', element: <View /> },
        { path: 'home/print-inmate', element: <Prints /> },

        { path: 'home/update-inmate', element: <AddNew /> },
        { path: 'reminder', element: <Notification /> },
        { path: 'manageusers', element: <Manageusers /> },
        { path: 'manageusers/createnewuser', element: <CreateNewUser /> },
      
       
        // { path: 'manageusers/View-createnewuser', element: <ViewUser /> },
        // { path: 'manageusers/update-createnewuser', element: <Update /> },
        { path: 'ViewATP', element: <ViewATP /> },
        { path: 'ViewConvict', element: <ViewConvict /> },
        { path: 'Viewdebtor', element: <Viewdebtor /> },
        { path: 'ViewTransferIn', element: <ViewTransferIn /> },
        { path: 'ViewLoger', element: <ViewLodger /> },
        { path: 'Lunatic/Amputee(convict)', element: <ViewLunatic /> },
        { path: 'Lunatic/Amputee(ATP)', element: <ViewLunaticAmputee /> },
        // { path: 'ViewIDR', element: <ViewIDR /> },








      
      ],
    },
  ]);
  return element;
}

export default AppNavigation;
