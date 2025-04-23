// export default function RootLayout({children}) {
//     return (
//         <html lang="en">
//         <body>{children}</body>   
//         </html>
//     )
// }


import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}