import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Work as WorkIcon,
  Circle as CircleIcon
} from '@mui/icons-material';
import type { Experience as ExperienceType } from '../../types/profile';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedCard } from '../ui/AnimatedCard';
import { getStaggeredDelay } from '../../utils';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Box id="experience" sx={{ py: 8 }}>
      <SectionTitle>Досвід роботи</SectionTitle>
      
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        {experience.map((exp, index) => (
          <AnimatedCard
            key={`${exp.title}-${exp.period}`}
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
                background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
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
                <WorkIcon
                  color="primary"
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
                  {exp.title}
                </Typography>
                
                <Typography variant="body2" color="primary" sx={{ fontWeight: 500, mb: 1 }}>
                  {exp.period} • {exp.location}
                </Typography>
                
                <List dense sx={{ py: 0 }}>
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <ListItem key={respIndex} sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 24 }}>
                        <CircleIcon
                          sx={{
                            fontSize: 8,
                            color: 'primary.main',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.5)'
                            }
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={responsibility}
                        primaryTypographyProps={{
                          variant: 'body2',
                          sx: { lineHeight: 1.6 }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </AnimatedCard>
        ))}
      </Box>
    </Box>
  );
};
