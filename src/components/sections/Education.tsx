import React from 'react';
import {
  Box,
  Typography,
  ListItemIcon
} from '@mui/material';
import {
  School as SchoolIcon
} from '@mui/icons-material';
import type { Education as EducationType } from '../../types/profile';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedCard } from '../ui/AnimatedCard';
import { getStaggeredDelay } from '../../utils';

interface EducationProps {
  education: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Box id="education" sx={{ py: 8 }}>
      <SectionTitle>Education</SectionTitle>
      
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {education.map((edu, index) => (
          <AnimatedCard
            key={`${edu.title}-${edu.period}`}
            delay={getStaggeredDelay(index, 150)}
            sx={{
              mb: 3,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 4,
                background: 'linear-gradient(135deg, #673ab7 0%, #9c27b0 100%)',
                borderRadius: '2px',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              },
              '&:hover::before': {
                opacity: 1
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                <SchoolIcon
                  color="secondary"
                  sx={{
                    fontSize: 28,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                />
              </ListItemIcon>
              
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                  {edu.title}
                </Typography>
                
                <Typography variant="body2" color="secondary" sx={{ fontWeight: 500, mb: 1 }}>
                  {edu.period} • {edu.location}
                </Typography>
              </Box>
            </Box>
          </AnimatedCard>
        ))}
      </Box>
    </Box>
  );
};
