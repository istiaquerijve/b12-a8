import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import CardDetail from '../pages/CardDetail/CardDetail';
import AppDetail from '../pages/AppDetail/AppDetail';

export  const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            path: "/",
            loader: () => fetch("/card.json"),
            Component: Home,
        },
        
        {
          path: "/cardDetail/:id",
          loader: () => fetch("/card.json"),
          Component: CardDetail,
        },

        {
          path: "/apps",
          loader: () => fetch("/app.json"),
          Component: Apps,
        },
        {
          path: "/appDetail/:id",
          loader: () => fetch("/app.json"),
          Component: AppDetail,
        }
    ]
  },
]);
