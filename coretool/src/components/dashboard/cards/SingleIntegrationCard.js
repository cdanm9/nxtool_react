import React from 'react';
import { Box, Typography, Avatar, Card, CardContent, Stack,Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from 'framer-motion';

const icons = {
  total: PersonIcon,
  completed: CheckCircleIcon,
  progress: AccessTimeIcon,
  rejected: CancelIcon,
};

const StatusCard = ({ type = 'total', count, label, color, gradient }) => {
  const IconComponent = icons[type];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{ width: '100%' }}
    >
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 4,
          px: 2,
          py: 3,
          boxShadow: 3,
          background: gradient,
          color: '#fff',
          transition: '0.3s',
        }}
      >
        <Avatar sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', mr: 2 }}>
          <IconComponent />
        </Avatar>
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h5" fontWeight="bold">
            {count}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {label}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function SingleIntegrationCard() {
  return (
        <StatusCard
          type="completed"
          count={2}
          label="Completed"
          color="#66bb6a"
          gradient="linear-gradient(135deg, #43a047, #66bb6a)"
        />
  );
}
