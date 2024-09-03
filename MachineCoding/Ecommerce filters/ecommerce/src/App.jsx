import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./component/Home";
import Context from "./context/context";

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);

const App = () => {
  return (
    <Context>
      <RouterProvider router={Router} />;
    </Context>
  );
};

export default App;
