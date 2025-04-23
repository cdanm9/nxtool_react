import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import DashboardPage from "pages/DashboardPage";

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
  <div className="App full-height">
    <DashboardPage />   
    </div>
  //   </NextAppProvider>
  // </React.StrictMode>,
  ,
  document.getElementById("root")
);

