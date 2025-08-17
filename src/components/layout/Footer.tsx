import React from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { formatDate } from '../../utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = formatDate(new Date().toISOString());

  return (
    <Fade in timeout={1000}>
      <Box
        component="footer"
        sx={{
          py: 4,
          mt: 8,
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(103, 58, 183, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {currentYear} Mykhailo Potseluiev. All rights reserved.
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
          Last updated: {currentDate}
        </Typography>
      </Box>
    </Fade>
  );
};
