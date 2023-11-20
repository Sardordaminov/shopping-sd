import React from "react";
import Home from "./pages/Home/Home";
import { useRoutes } from "react-router-dom";
import Favorites from "./pages/Favorites/Favorites";

export const Routes = () => {
  const PublicRoute = [
    {
      children: [
        { path: "/", element: <Home /> },
        { path: "/favorites", element: <Favorites /> },
      ],
    },
  ];
  return useRoutes(PublicRoute);
};
