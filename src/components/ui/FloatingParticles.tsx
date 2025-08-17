import React from 'react';
import { Box } from '@mui/material';

export const FloatingParticles: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '2px',
        height: '2px',
        background: 'rgba(139, 92, 246, 0.6)',
        borderRadius: '50%',
        animation: 'float1 25s ease-in-out infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: '3px',
        height: '3px',
        background: 'rgba(192, 132, 252, 0.4)',
        borderRadius: '50%',
        animation: 'float2 30s ease-in-out infinite',
      },
      '@keyframes float1': {
        '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
        '25%': { transform: 'translate(100px, -50px) rotate(90deg)' },
        '50%': { transform: 'translate(50px, -100px) rotate(180deg)' },
        '75%': { transform: 'translate(-50px, -50px) rotate(270deg)' },
      },
      '@keyframes float2': {
        '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
        '33%': { transform: 'translate(-80px, -80px) rotate(120deg)' },
        '66%': { transform: 'translate(80px, -120px) rotate(240deg)' },
      },
    }}
  />
);
