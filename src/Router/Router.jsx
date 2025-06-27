import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import BrowseTips from "../Pages/BrowseTips";
import ShareTips from "../Pages/ShareTips";
import MyTips from "../Pages/MyTips";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ExploreGardeners from "../Pages/ExploreGardeners";
import TipDetails from "../Pages/TipDetails";
import UpdateTip from "../Pages/UpdateTip";
import PrivateRout from "../components/PrivateRout";
import Loader from "../components/Loader";
import Error from "../components/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProfile from "../Pages/MyProfile";
import ContactUs from "../components/ContactUs";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://gardening-server-six.vercel.app/gardeners'),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Home></Home>
      },
      {
        path: '/exploreGardeners',
        loader: () => fetch("https://gardening-server-six.vercel.app/allGardeners"),
        element: <ExploreGardeners></ExploreGardeners>,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: '/browseTips',
        loader: () => fetch('https://gardening-server-six.vercel.app/shareTips'),
        hydrateFallbackElement: <Loader></Loader>,
        element: <BrowseTips></BrowseTips>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/tipDetails/:id',
        loader: ({ params }) => fetch(`https://gardening-server-six.vercel.app/shareTips/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRout><TipDetails></TipDetails></PrivateRout>
      },
      {
        path: '/updateTip/:id',
        loader: ({ params }) => fetch(`https://gardening-server-six.vercel.app/shareTips/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <UpdateTip></UpdateTip>,
      },
      {
        path: 'contactUs',
        element: <ContactUs></ContactUs>
      }
    ]
  },

  {
    path: '/',
    element: <PrivateRout><DashboardLayout></DashboardLayout></PrivateRout>,
    children: [
      {
        path: 'myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: '/shareTips',
        element: <PrivateRout><ShareTips></ShareTips></PrivateRout>
      },

      {
        path: '/myTips',
        element: <PrivateRout><MyTips></MyTips></PrivateRout>
      },
    ]
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);