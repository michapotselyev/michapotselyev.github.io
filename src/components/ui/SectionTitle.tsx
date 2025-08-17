import React from 'react';
import { Typography, Fade } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SectionTitleProps extends TypographyProps {
  children: React.ReactNode;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  position: 'relative',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -theme.spacing(1),
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
    borderRadius: '2px',
  },
}));

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, ...props }) => {
  return (
    <Fade in timeout={800}>
      <StyledTypography variant="h3" component="h2" {...props}>
        {children}
      </StyledTypography>
    </Fade>
  );
};
