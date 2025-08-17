import React from 'react';
import { Paper, Grow } from '@mui/material';
import type { PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface AnimatedCardProps extends PaperProps {
  delay?: number;
  children: React.ReactNode;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(103, 58, 183, 0.1) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: -1,
  },

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    
    '&::before': {
      opacity: 1,
    },
  },

  '&:active': {
    transform: 'translateY(-2px)',
  },
}));

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  delay = 0, 
  children, 
  ...props 
}) => {
  return (
    <Grow in timeout={800 + delay}>
      <StyledPaper {...props}>
        {children}
      </StyledPaper>
    </Grow>
  );
};
