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


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: ()=>fetch('http://localhost:5000/gardeners'),
        hydrateFallbackElement: <p>loading</p>,
        element: <Home></Home>
      },
      {
        path: '/exploreGardeners',
        element: <ExploreGardeners></ExploreGardeners>
      },
      {
        path: '/browseTips',
        loader: ()=>fetch('http://localhost:5000/shareTips'),
        hydrateFallbackElement: <p>Loading...........</p>,
        element: <BrowseTips></BrowseTips>
      },
      {
        path: '/shareTips',
        element: <ShareTips></ShareTips>
      },
      {
        path: '/myTips',
        element: <MyTips></MyTips>
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
        loader: ({params})=>fetch(`http://localhost:5000/shareTips/${params.id}`),
        element: <TipDetails></TipDetails>
      }
    ]
  },
  {
    path: '/*',
    element: <p>error page</p>
  }
]);