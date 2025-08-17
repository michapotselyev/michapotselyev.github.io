import React from 'react';
import { Box } from '@mui/material';

export const SpaceBackground: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 70%, #000000 100%)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(2px 2px at 20px 30px, rgba(139, 92, 246, 0.3), transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(192, 132, 252, 0.2), transparent),
          radial-gradient(1px 1px at 90px 40px, rgba(139, 92, 246, 0.4), transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(192, 132, 252, 0.3), transparent),
          radial-gradient(2px 2px at 160px 30px, rgba(139, 92, 246, 0.2), transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px',
        animation: 'twinkle 20s linear infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(3px 3px at 50px 50px, rgba(139, 92, 246, 0.4), transparent),
          radial-gradient(2px 2px at 120px 20px, rgba(192, 132, 252, 0.3), transparent),
          radial-gradient(1px 1px at 180px 60px, rgba(139, 92, 246, 0.5), transparent),
          radial-gradient(2px 2px at 220px 90px, rgba(192, 132, 252, 0.2), transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 150px',
        animation: 'twinkle 15s linear infinite reverse',
      },
      '@keyframes twinkle': {
        '0%': { transform: 'translateY(0px)' },
        '100%': { transform: 'translateY(-100px)' },
      },
    }}
  />
);
