import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Fade,
  Grow,
} from '@mui/material';
import type { Skills as SkillsType } from '../types/profile';

interface SkillsProps {
  skills: SkillsType;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Card id="skills">
      <CardContent>
        <Fade in timeout={800}>
          <Typography variant="h2" gutterBottom>
            Технічний стек
          </Typography>
        </Fade>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.technical.map((skill, index) => (
            <Grow in timeout={1000 + index * 50} key={index}>
              <Chip
                label={skill}
                size="small"
                sx={{ 
                  fontSize: '0.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(79, 140, 255, 0.1), rgba(124, 92, 255, 0.1))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover::before': {
                    opacity: 1,
                  },
                }}
              />
            </Grow>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
