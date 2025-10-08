import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Roots/Root';
import Error from '../Pages/ErrorPage/Error';
import Home from '../Pages/Home/Home';
import { Component } from 'react';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
           
        }
    ]
  },
]);