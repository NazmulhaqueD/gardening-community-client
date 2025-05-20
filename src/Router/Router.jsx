import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/*',
    element: <p>error page</p>
  }
]);