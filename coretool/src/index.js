import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import DashboardPage from "./DashboardPage";
import reportWebVitals from "./reportWebVitals";

import { NextAppProvider } from '@toolpad/core/nextjs';
import LinearProgress from '@mui/material/LinearProgress';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { useDemoRouter } from '@toolpad/core/internal';
import DashboardIcon from '@mui/icons-material/Dashboard';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main Items',
  },
  {
    segment: 'page',
    title: 'Page',
    icon: <DashboardIcon />,
  }
];

ReactDOM.render(
  <React.StrictMode>
    <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
    <DashboardPage />   
    </NextAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
