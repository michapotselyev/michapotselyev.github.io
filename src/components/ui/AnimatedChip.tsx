import React from 'react';
import { Chip, Grow } from '@mui/material';
import type { ChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface AnimatedChipProps extends ChipProps {
  delay?: number;
}

const StyledChip = styled(Chip)(({ theme }) => ({
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },

  '&:active': {
    transform: 'scale(1.02)',
  },
}));

export const AnimatedChip: React.FC<AnimatedChipProps> = ({ 
  delay = 0, 
  ...props 
}) => {
  return (
    <Grow in timeout={600 + delay}>
      <StyledChip {...props} />
    </Grow>
  );
};
