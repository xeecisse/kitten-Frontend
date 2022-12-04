import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useRoutes } from "react-router";
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
import { useDispatch } from "react-redux";
import { init } from "../../redux/actions/auth";
import ManageGigs from "../../pages/Gigs/ManageGigs";
import MyGigs from "../../pages/Gigs/MyGigs";
import GigsApplicationInfo from "../../pages/Gigs/GigsApplicationInfo";
import ViewProposal from "../../pages/Gigs/ViewProposal";
import ManageContracts from "../../pages/contracts/ManageContracts";

function AppNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const initialRoute = location.pathname;
    dispatch(
      init(
        () => {
          navigate(initialRoute);
        },
        () => {
          if (initialRoute.includes("login")) {
            navigate("/login");
          } else {
            navigate("/login?rdr=" + initialRoute);
          }
        }
      )
    );
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <ModelList />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
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
          element: <Profile />,
          // element: <ViewModel />,
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
      path: "/gig-details/:id",
      element: <ViewGigs />,
    },
    {
      path: "/submit-proposal/:id",
      element: <Apply />,
    },
    {
      path: "/create-gig",
      element: <Create />,
    },
    {
      path: "/manage-gigs",
      element: <ManageGigs />,
    },
    {
      path: "/manage-gigs/view/:id",
      element: <GigsApplicationInfo />,
    },
    {
      path: "/manage-gigs/view-proposal/:id",
      element: <ViewProposal />,
    },
    {
      path: "/my-gigs",
      element: <MyGigs />,
    },
    {
      path: "/update-profile",
      element: <ModalAlert />,
    },
    {
      path: "/contracts",
      element: <ManageContracts />,
    },
    {
      path: "/messages",
      element: <Message />,
    },
  ]);
  return element;
}

export default AppNavigation;
