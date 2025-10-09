import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Roots/Root';
import Error from '../Pages/ErrorPage/Error';
import Home from '../Pages/Home/Home';
import { Component } from 'react';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Components/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            loader: ()=> fetch('TopApp.json'),
            path: "/",
            Component: Home,
        },
        {
          loader: () => fetch('App.json'),
          path: "/Apps",
          Component: Apps,
        },
        {
          path: "/Installation",
          Component: Installation
        },
        {
          path:"/appDetails/:id",
          Component: AppDetails,
        }
    ]
  },
]);