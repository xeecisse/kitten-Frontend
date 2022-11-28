import React from "react";
import { Outlet, useRoutes } from "react-router";
import Signup from "../../pages/auth/Signup";
// import MenuIndex from '../../Pages/Sidebar/MenuIndex';
// import Welcome from '../../Pages/Welcome';
import Login from "../../pages/auth/Login";
import ModelList from "../../pages/models/ModelList";
import Model from "../../pages/Model";
import Profile from "../../pages/profile/Profile";
import ViewModel from "../../pages/models/ViewModel";
import Message from "../../pages/message";
import Reviews from "../../pages/reviews";
import ErrorPage from "../../pages/error-page";
import Gigs from "../../pages/Gigs/Gigs";
import ViewGigs from "../../pages/Gigs/ViewGigs";
import Apply from "../../pages/Gigs/Apply";
import Create from "../../pages/Gigs/Create";
import Update from "../modal";
import ModalAlert from "../modal";
import Contract from "../../pages/Contract";
import ViewContract from "../../pages/ViewContract";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Signup />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/model-list",
      element: <Outlet />,
      children: [
        { path: "/model-list", element: <ModelList />, index: true },
        {
          path: "view-model/:model_id",
          element: <ViewModel />,
          // element: <Outlet />,
          // children: [
          //   {
          //     path: ":model_id",
          //     element: <ViewModel />,
          //     // index: true,
          //     children: [
          //       { path: "message", element: <Message /> },
          //       { path: "reviews", element: <Reviews /> },
          //     ],
          //   },
          // ],
        },
        {
          path: "view-model/:model_id/message",
          element: <Message />,
        },
        {
          path: "view-model/:model_id/reviews",
          element: <Reviews />,
        },
      ],
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "/gigs",
      element: <Gigs />,
    },
    {
      path: "/view-gigs",
      element: <ViewGigs />,
    },
    {
      path: "/apply-gigs",
      element: <Apply />,
    },
    {
      path: "/create-gig",
      element: <Create />,
    },
    {
      path: "/update-profile",
      element: <ModalAlert />,
    },
    {
      path: "/create-contract",
      element: <Contract />,
    },
    {
      path: "/view-contract",
      element: <ViewContract />,
    },
  ]);
  return element;
}

export default AppNavigation;
