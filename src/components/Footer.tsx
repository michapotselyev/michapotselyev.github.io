import React from 'react';
import { Box, Typography, Fade } from '@mui/material';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Fade in timeout={2000}>
      <Box
        component="footer"
        sx={{
          py: 4,
          mt: 4,
          textAlign: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
          background: 'linear-gradient(180deg, rgba(11,15,25,0.5), rgba(11,15,25,0.8))',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Оновлено: {lastUpdated}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © {currentYear} Mykhailo Potseluiev. Всі права захищені.
        </Typography>
      </Box>
    </Fade>
  );
};
