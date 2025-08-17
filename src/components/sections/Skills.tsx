import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Fade,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Code as CodeIcon,
  Star as StarIcon
} from '@mui/icons-material';
import type { Skills as SkillsType } from '../../types/profile';
import { SectionTitle } from '../ui/SectionTitle';
// import { SkillsParticles } from '../ui/SkillsParticles';
import { SkillCard } from '../ui/SkillCard';
import { getStaggeredDelay } from '../../utils';

interface SkillsProps {
  skills: SkillsType;
}

const skillCategories = [
  {
    id: 'main',
    title: 'Основні технології',
    icon: StarIcon,
    color: '#FFD700',
    description: 'Ключові технології, які я використовую щодня'
  },
  {
    id: 'technical',
    title: 'Всі навички',
    icon: CodeIcon,
    color: '#9c27b0',
    description: 'Повний стек технологій та інструментів'
  }
];

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('main');

  const allSkills = [...skills.main, ...skills.technical];
  const currentSkills = activeCategory === 'main' ? skills.main : skills.technical;

  return (
    <Box id="skills" sx={{ py: 12, position: 'relative', overflow: 'hidden' }}>
      {/* Background particles */}
      {/* <SkillsParticles skills={allSkills} /> */}

      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(156, 39, 176, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-30px) rotate(180deg)' }
          }
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(103, 58, 183, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 6s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
            '50%': { transform: 'scale(1.3)', opacity: 0.6 }
          }
        }}
      />

      <SectionTitle>Технічний стек</SectionTitle>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Category selector */}
        <Fade in timeout={800}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 1,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                gap: 1
              }}
            >
              {skillCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                
                return (
                  <Tooltip key={category.id} title={category.description}>
                    <IconButton
                      onClick={() => setActiveCategory(category.id)}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(156, 39, 176, 0.2) 0%, rgba(103, 58, 183, 0.2) 100%)'
                          : 'transparent',
                        border: isActive ? '1px solid rgba(156, 39, 176, 0.3)' : '1px solid transparent',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(103, 58, 183, 0.1) 100%)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      <Icon 
                        sx={{ 
                          fontSize: 24, 
                          color: isActive ? category.color : 'text.secondary',
                          transition: 'all 0.3s ease'
                        }} 
                      />
                    </IconButton>
                  </Tooltip>
                );
              })}
            </Paper>
          </Box>
        </Fade>

        {/* Skills grid */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          {/* Category title */}
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 4, color: 'white' }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}
              >
                {skillCategories.find(cat => cat.id === activeCategory)?.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
              >
                {skillCategories.find(cat => cat.id === activeCategory)?.description}
              </Typography>
            </Box>
          </Fade>

          {/* Skills cards grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(auto-fit, minmax(140px, 1fr))',
                sm: 'repeat(auto-fit, minmax(160px, 1fr))',
                md: 'repeat(auto-fit, minmax(180px, 1fr))',
                lg: 'repeat(auto-fit, minmax(200px, 1fr))'
              },
              gap: 3,
              maxWidth: 1200,
              mx: 'auto',
              position: 'relative',
              zIndex: 3
            }}
          >
            {currentSkills.map((skill, index) => (
              <SkillCard
                key={`${activeCategory}-${skill}-${index}`}
                skill={skill}
                delay={getStaggeredDelay(index, 100)}
                index={index}
                isMain={activeCategory === 'main'}
              />
            ))}
          </Box>

          {/* Skills statistics */}
          <Fade in timeout={1500}>
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  maxWidth: 800,
                  mx: 'auto',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, #9c27b0 50%, transparent 100%)',
                    animation: 'shimmer 3s ease-in-out infinite',
                    '@keyframes shimmer': {
                      '0%': { transform: 'translateX(-100%)' },
                      '100%': { transform: 'translateX(100%)' }
                    }
                  }
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(2, 1fr)',
                      md: 'repeat(4, 1fr)'
                    },
                    gap: 3
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1
                      }}
                    >
                      {allSkills.length}+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Технологій
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1
                      }}
                    >
                      5+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Років досвіду
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1
                      }}
                    >
                      50+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Проектів
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #00bcd4 0%, #009688 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1
                      }}
                    >
                      Senior
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Рівень
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};
