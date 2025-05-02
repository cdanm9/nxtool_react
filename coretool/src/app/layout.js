'use client'
import * as React from 'react';
// import { hydrateRoot } from 'react-dom/client';
import { NextAppProvider } from '@toolpad/core/nextjs';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
// import type { Navigation } from '@toolpad/core/AppProvider';
import LinearProgress from '@mui/material/LinearProgress';
import SideBarIcon from 'components/SideBarIcon';
import SideBarIconDashboard from 'components/SideBarIconDashboard';
import SideBarIconReport from 'components/SideBarIconReport';
import SideBarIconApprove from 'components/SideBarIconApprove';   


const NAVIGATION = [
  {
    kind: 'header',
    title: 'Purchase Order',
  },
  {
    segment: '',   
    title: 'Dashboard',  
    icon: <SideBarIconDashboard iconJsonName='AnalyticsIcon' />,   
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <SideBarIcon iconJsonName='CartIcon'/>,
  },
  {
    segment: 'pocreate',
    title: 'Add Orders',
    icon: <SideBarIcon iconJsonName='CartIcon'/>,   
  },
  {
    segment: 'poapprove',
    title: 'Approve Orders',
    icon: <SideBarIconApprove iconJsonName='CartIcon'/>,   
  },
  {
    segment: 'poreport',
    title: 'View Orders',
    icon: <SideBarIconReport iconJsonName='Assignment'/>,   
  }
];

export default function RootLayout({ children }) {



  // const { window } = props;

  const [session, setSession] = React.useState({
    user: {
      name: 'Chandan Moolya',
      email: 'dan.moolya@gmail.com',
      image: '',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Chandan Moolya',
            email: 'dan.moolya@gmail.com',
            image: '',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  // const demoWindow = window !== undefined ? window() : undefined;

  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider branding={{
                  logo:<SideBarIconApprove/>,
                  title: 'Vendor Portal',
                  homeUrl: '/toolpad/core/introduction',
                }} navigation={NAVIGATION}
                session={session}
                authentication={authentication}>    
              {children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
