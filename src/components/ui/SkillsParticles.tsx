import React from 'react';
import { Box } from '@mui/material';

interface SkillsParticlesProps {
  skills: string[];
}

export const SkillsParticles: React.FC<SkillsParticlesProps> = ({ skills }) => {
  const particleCount = Math.min(skills.length * 2, 50);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Animated particles */}
      {Array.from({ length: particleCount }).map((_, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: [
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
              '#00bcd4',
              '#4caf50',
              '#ff9800',
              '#f44336',
            ][Math.floor(Math.random() * 8)],
            borderRadius: '50%',
            opacity: Math.random() * 0.6 + 0.2,
            animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            '@keyframes float': {
              '0%, 100%': {
                transform: 'translateY(0px) translateX(0px)',
                opacity: Math.random() * 0.6 + 0.2,
              },
              '25%': {
                transform: `translateY(${Math.random() * 50 - 25}px) translateX(${Math.random() * 50 - 25}px)`,
                opacity: Math.random() * 0.8 + 0.4,
              },
              '50%': {
                transform: `translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 100 - 50}px)`,
                opacity: Math.random() * 0.6 + 0.2,
              },
              '75%': {
                transform: `translateY(${Math.random() * 50 - 25}px) translateX(${Math.random() * 50 - 25}px)`,
                opacity: Math.random() * 0.8 + 0.4,
              },
            },
          }}
        />
      ))}

      {/* Connection lines */}
      {Array.from({ length: Math.floor(particleCount / 3) }).map((_, index) => (
        <Box
          key={`line-${index}`}
          sx={{
            position: 'absolute',
            height: 1,
            background: `linear-gradient(90deg, transparent, rgba(156, 39, 176, ${Math.random() * 0.3 + 0.1}), transparent)`,
            width: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: Math.random() * 0.4 + 0.1,
            animation: `pulse ${Math.random() * 4 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            '@keyframes pulse': {
              '0%, 100%': {
                opacity: Math.random() * 0.4 + 0.1,
              },
              '50%': {
                opacity: Math.random() * 0.6 + 0.3,
              },
            },
          }}
        />
      ))}

      {/* Glow effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(156, 39, 176, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'glow 8s ease-in-out infinite',
          '@keyframes glow': {
            '0%, 100%': {
              transform: 'scale(1)',
              opacity: 0.3,
            },
            '50%': {
              transform: 'scale(1.2)',
              opacity: 0.6,
            },
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          left: '15%',
          width: 150,
          height: 150,
          background: 'radial-gradient(circle, rgba(103, 58, 183, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'glow 6s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};
