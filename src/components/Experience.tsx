import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
  Grow,
} from '@mui/material';
import { Work as WorkIcon, Circle as CircleIcon } from '@mui/icons-material';
import type { Experience as ExperienceType } from '../types/profile';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Card id="experience">
      <CardContent>
        <Fade in timeout={800}>
          <Typography variant="h2" gutterBottom>
            Досвід
          </Typography>
        </Fade>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {experience.map((item, index) => (
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
                    background: 'linear-gradient(180deg, #4f8cff, #7c5cff)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    borderColor: 'rgba(79, 140, 255, 0.3)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <WorkIcon 
                    color="primary" 
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
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {item.period} • {item.location}
                    </Typography>
                    <List dense sx={{ py: 0 }}>
                      {item.responsibilities.map((responsibility, respIndex) => (
                        <ListItem key={respIndex} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <CircleIcon 
                              sx={{ 
                                fontSize: 8, 
                                color: 'primary.main',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  transform: 'scale(1.2)',
                                },
                              }} 
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={responsibility}
                            sx={{
                              '& .MuiListItemText-primary': {
                                fontSize: '0.875rem',
                                lineHeight: 1.6,
                                transition: 'all 0.2s ease',
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
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
