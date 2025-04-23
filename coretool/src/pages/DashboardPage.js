import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function DashboardPage() {
  return (<Container disableGutters>
    <Box height="80vh" py={5}>
    <Typography>Welcome to a page in the dashboard!</Typography>;
    </Box>
  </Container>)
}

