// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <Typography>
//       Welcome to <Link href="https://mui.com/toolpad/core/introduction">Toolpad Core!</Link>
//     </Typography>
//   );
// }
'use client'
// import * as React from 'react';
import { Grid, Box } from '@mui/material';
// import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from 'components/dashboard/SalesOverview';
import YearlyBreakup from 'components/dashboard/YearlyBreakup';   
import MonthlyEarnings from 'components/dashboard/MonthlyEarnings';

const Dashboard = () => {
  return (
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview /> 
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <RecentTransactions /> */}
          </Grid>
          <Grid item xs={12} lg={8}>
            {/* <ProductPerformance /> */}
          </Grid>
          <Grid item xs={12}>
            {/* <Blog /> */}
          </Grid>
        </Grid>
      </Box>
  )
}

export default Dashboard;