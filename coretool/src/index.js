import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from "pages/About";
import Contact from "pages/Contact";
import DashboardPage from "pages/DashboardPage";
import Layout from "layout/Layout";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '/',
            Component: DashboardPage,
          },
          {
            path: '/about',
            Component: About,
          },
          {
            path: '/contact',
            Component: Contact,
          },
        ],
      },
    ],
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

