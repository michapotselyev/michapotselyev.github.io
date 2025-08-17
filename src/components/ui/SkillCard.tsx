import React, { useState } from 'react';
import { Box, Typography, Paper, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SkillCardProps {
  skill: string;
  delay?: number;
  index: number;
  isMain?: boolean;
}

const StyledPaper = styled(Paper)<{ isMain?: boolean }>(({ theme, isMain }) => ({
  padding: theme.spacing(2.5),
  borderRadius: theme.spacing(2),
  // background: isMain 
  //   ? 'linear-gradient(135deg, rgba(156, 39, 176, 0.15) 0%, rgba(103, 58, 183, 0.1) 100%)'
  //   : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  backdropFilter: 'blur(15px)',
  border: isMain 
    ? '2px solid rgba(156, 39, 176, 0.3)'
    : '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minHeight: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',

  // '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   background: isMain
  //     ? 'linear-gradient(135deg, rgba(156, 39, 176, 0.2) 0%, rgba(103, 58, 183, 0.2) 100%)'
  //     : 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(103, 58, 183, 0.1) 100%)',
  //   opacity: 0,
  //   transition: 'opacity 0.3s ease',
  //   zIndex: -1,
  // },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    // background: 'radial-gradient(circle, rgba(156, 39, 176, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.4s ease',
    zIndex: -2,
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.05)',
    boxShadow: '0 20px 40px rgba(156, 39, 176, 0.4)',
    borderColor: isMain ? 'primary.main' : 'primary.main',
    // background: isMain
    //   ? 'linear-gradient(135deg, rgba(156, 39, 176, 0.25) 0%, rgba(103, 58, 183, 0.2) 100%)'
    //   : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',

    '&::before': {
      opacity: 1,
    },

    '&::after': {
      width: '200%',
      height: '200%',
    },

    '& .skill-text': {
      background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      transform: 'scale(1.1)',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      color: 'white',
    },

    '& .skill-glow': {
      opacity: 1,
      transform: 'scale(1.2)',
    },
  },

  '&:active': {
    transform: 'translateY(-4px) scale(1.02)',
  },
}));

const GlowEffect = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  height: '100%',
  // background: 'radial-gradient(circle, rgba(156, 39, 176, 0.3) 0%, transparent 70%)',
  borderRadius: '50%',
  transform: 'translate(-50%, -50%) scale(0.8)',
  opacity: 0,
  transition: 'all 0.4s ease',
  zIndex: -3,
  pointerEvents: 'none',
}));

export const SkillCard: React.FC<SkillCardProps> = ({ skill, delay = 0, isMain = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grow in timeout={600 + delay}>
      <Box
        sx={{
          position: 'relative',
          perspective: '1000px',
        }}
      >
        <StyledPaper
          isMain={isMain}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none',
            '@keyframes pulse': {
              '0%, 100%': {
                boxShadow: isMain 
                  ? '0 20px 40px rgba(156, 39, 176, 0.4)'
                  : '0 20px 40px rgba(156, 39, 176, 0.3)',
              },
              '50%': {
                boxShadow: isMain
                  ? '0 25px 50px rgba(156, 39, 176, 0.6)'
                  : '0 25px 50px rgba(156, 39, 176, 0.5)',
              },
            },
          }}
        >
          <GlowEffect className="skill-glow" />
          
          <Typography
            variant="body1"
            className="skill-text"
            sx={{
              fontWeight: isMain ? 700 : 600,
              fontSize: isMain ? '1.1rem' : '1rem',
              color: isHovered ? 'white' : 'white',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: 1,
              position: 'relative',
              zIndex: 1,
              textShadow: isMain ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
            }}
          >
            {skill}
          </Typography>

          {/* Floating particles around the card */}
          {isHovered && (
            <>
              <Box
                sx={{
                  position: 'absolute',
                  top: -5,
                  left: -5,
                  width: 4,
                  height: 4,
                  background: '#9c27b0',
                  borderRadius: '50%',
                  animation: 'float1 3s ease-in-out infinite',
                  '@keyframes float1': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(10px, -10px)' },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -3,
                  right: -3,
                  width: 3,
                  height: 3,
                  background: '#673ab7',
                  borderRadius: '50%',
                  animation: 'float2 2.5s ease-in-out infinite',
                  '@keyframes float2': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(-8px, -8px)' },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -4,
                  left: -2,
                  width: 2,
                  height: 2,
                  background: '#3f51b5',
                  borderRadius: '50%',
                  animation: 'float3 3.5s ease-in-out infinite',
                  '@keyframes float3': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(6px, -6px)' },
                  },
                }}
              />
            </>
          )}
        </StyledPaper>
      </Box>
    </Grow>
  );
};
