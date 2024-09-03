import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./components/Home";
import Accordian from "./components/Accordian";
import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";
import StarRating from "./components/StarRating";
import InfiniteScrolling from "./components/InfiniteScrolling";

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: (
      <div className="text-center flex my-2 ">
        ....errror while loading in main
      </div>
    ),
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Accordian />,
        path: "/accordian",
      },
      {
        element: <Carousel />,
        path: "/carousel",
      },
      {
        element: <Pagination />,
        path: "/pagination",
      },
      {
        element: <StarRating />,
        path: "/star",
      },
      {
        element: <InfiniteScrolling />,
        path: "/infinite",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
