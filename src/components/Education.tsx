import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Fade,
  Grow,
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';
import type { Education as EducationType } from '../types/profile';

interface EducationProps {
  education: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Card id="education">
      <CardContent>
        <Fade in timeout={800}>
          <Typography variant="h2" gutterBottom>
            Освіта
          </Typography>
        </Fade>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {education.map((item, index) => (
            <Grow in timeout={1000 + index * 200} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  backgroundColor: 'rgba(14, 22, 40, 0.8)',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #7c5cff, #a78bfa)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    borderColor: 'rgba(124, 92, 255, 0.3)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <SchoolIcon 
                    color="secondary" 
                    sx={{ 
                      mt: 0.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    }} 
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.period} • {item.location}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grow>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
