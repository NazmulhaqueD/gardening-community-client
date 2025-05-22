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


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:5000/gardeners'),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Home></Home>
      },
      {
        path: '/exploreGardeners',
        element: <ExploreGardeners></ExploreGardeners>
      },
      {
        path: '/browseTips',
        loader: () => fetch('http://localhost:5000/shareTips'),
        hydrateFallbackElement: <Loader></Loader>,
        element: <BrowseTips></BrowseTips>
      },
      {
        path: '/shareTips',
        element: <PrivateRout><ShareTips></ShareTips></PrivateRout>
      },
      {
        path: '/myTips',
        element: <PrivateRout><MyTips></MyTips></PrivateRout>
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
        loader: ({ params }) => fetch(`http://localhost:5000/shareTips/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRout><TipDetails></TipDetails></PrivateRout>
      },
      {
        path: '/updateTip/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/shareTips/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <UpdateTip></UpdateTip>,
      }
    ]
  },
  {
    path: '/*',
    element: <p>error page</p>
  }
]);