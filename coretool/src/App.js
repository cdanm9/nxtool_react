import React, { useEffect, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'contact',
    title: 'Contact',
    icon: <ContactsIcon />,
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <PeopleIcon />,
  },
];
function App(){
  return (
      <AppRouterCacheProvider
    branding={{
      logo:<SideBarIconApprove/>,
      title: 'Vendor Portal',
      homeUrl: '/toolpad/core/introduction',
    }}
      navigation={NAVIGATION}
    >
      <Outlet/>
    </AppRouterCacheProvider>
  );
}

export default App;
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { createTheme } from '@mui/material/styles';
// import DescriptionIcon from '@mui/icons-material/Description';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { useDemoRouter } from '@toolpad/core/internal';
// import SideBarIconApprove from 'components/SideBarIconApprove';  
// // import { useRouter } from 'next/navigation';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: 'data-toolpad-color-scheme',
//   },
//   colorSchemes: { light: true, dark: true },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };

// function DashboardLayoutNavigationLinks(props) {
//   const { window } = props;

//   const router = useDemoRouter('/home');
//   // const routerReact = useRouter(); 

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window !== undefined ? window() : undefined;

//   const [session, setSession] = React.useState({
//       user: {
//         name: 'Chandan Moolya',
//         email: 'dan.moolya@gmail.com',
//         image: '',
//       },
//     });
  
//     const authentication = React.useMemo(() => {
//       return {
//         signIn: () => {
//           setSession({
//             user: {
//               name: 'Chandan Moolya',
//               email: 'dan.moolya@gmail.com',
//               image: '',
//             },
//           });
//         },
//         signOut: () => {
//           setSession(null);
//           // routerReact.push('/coretool/do/logout')
//           // window.location.href = '/coretool/do/logout';
//         },
//       };
//     }, []);

//   return (
//     // preview-start
//     <AppProvider
//     branding={{
//       logo:<SideBarIconApprove/>,
//       title: 'Vendor Portal',
//       homeUrl: '/toolpad/core/introduction',
//     }}
//       navigation={[
//         {
//           segment: 'home',
//           title: 'Home',
//           icon: <DescriptionIcon />,
//         },
//         {
//           segment: 'about',
//           title: 'About Us',
//           icon: <DescriptionIcon />,
//         },
//       ]}
//       session={session}
//       authentication={authentication}
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <DemoPageContent pathname={router.pathname} />
//       </DashboardLayout>
//     </AppProvider>
//     // preview-end
//   );
// }

// DashboardLayoutNavigationLinks.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

// export default DashboardLayoutNavigationLinks;