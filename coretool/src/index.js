import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import DashboardPage from "./DashboardPage";

// const NAVIGATION = [
//   {
//     kind: 'header',
//     title: 'Main Items',
//   },
//   {
//     segment: 'page',
//     title: 'Page',
//     icon: <DashboardIcon />,
//   }
// ];

ReactDOM.render(
  // <React.StrictMode>
  //   <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
    <DashboardPage />   
  //   </NextAppProvider>
  // </React.StrictMode>,
  ,
  document.getElementById("root")
);

