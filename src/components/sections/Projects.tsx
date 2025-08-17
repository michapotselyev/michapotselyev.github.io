import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  Link,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Star as StarIcon,
  ForkRight as ForkIcon,
  Launch as LaunchIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedCard } from '../ui/AnimatedCard';
import { useProjects } from '../../hooks/useProjects';
import { SLIDER_CONFIG } from '../../constants';

export const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSlideChange = useCallback((newIndex: number, direction: 'left' | 'right') => {
    if (isTransitioning || projects.length === 0) return;
    
    setSlideDirection(direction);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, SLIDER_CONFIG.TRANSITION_DELAY);
  }, [isTransitioning, projects.length]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % projects.length;
    handleSlideChange(newIndex, 'right');
  }, [currentIndex, projects.length, handleSlideChange]);

  const prevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex, 'left');
  }, [currentIndex, projects.length, handleSlideChange]);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return;
    const direction = index > currentIndex ? 'right' : 'left';
    handleSlideChange(index, direction);
  }, [currentIndex, handleSlideChange]);

  // Auto-play
  useEffect(() => {
    if (!isPlaying || projects.length === 0) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, SLIDER_CONFIG.AUTO_PLAY_INTERVAL);
    
    return () => clearInterval(interval);
  }, [isPlaying, projects.length, nextSlide]);

  if (loading) {
    return (
      <Box id="projects" sx={{ py: 8, textAlign: 'center' }}>
        <SectionTitle>Вибрані проєкти</SectionTitle>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
          <Typography variant="h6" color="text.secondary">Завантаження проєктів...</Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box id="projects" sx={{ py: 8, textAlign: 'center' }}>
        <SectionTitle>Вибрані проєкти</SectionTitle>
        <Typography color="error" variant="h6">{error}</Typography>
      </Box>
    );
  }

  if (projects.length === 0) {
    return (
      <Box id="projects" sx={{ py: 8, textAlign: 'center' }}>
        <SectionTitle>Вибрані проєкти</SectionTitle>
        <Typography variant="h6" color="text.secondary">Проєкти не знайдено</Typography>
      </Box>
    );
  }

  const currentProject = projects[currentIndex];
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % projects.length;

  return (
    <Box id="projects" sx={{ py: 8 }}>
      <SectionTitle>Вибрані проєкти</SectionTitle>
      
      <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative' }}>
        {/* Main Slider Container */}
        <Box
          sx={{
            position: 'relative',
            height: isMobile ? 600 : 500,
            overflow: 'hidden',
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Previous Slide (Hidden on mobile) */}
          {!isMobile && (
            <AnimatedCard
              sx={{
                position: 'absolute',
                left: '5%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '25%',
                height: '70%',
                opacity: 0.6,
                zIndex: 1,
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.03)',
                '&:hover': {
                  transform: 'translateY(-50%) translateX(10px)',
                  opacity: 0.8,
                  background: 'rgba(255, 255, 255, 0.05)'
                }
              }}
              onClick={() => prevSlide()}
            >
              <Typography variant="h6" noWrap sx={{ textAlign: 'center', mt: 2 }}>
                {projects[prevIndex].name}
              </Typography>
            </AnimatedCard>
          )}

          {/* Main Slide */}
          <AnimatedCard
            sx={{
              position: 'absolute',
              left: isMobile ? '5%' : '35%',
              top: '50%',
              transform: `translateY(-50%) ${
                isTransitioning 
                  ? `translateX(${slideDirection === 'right' ? '-100%' : '100%'})` 
                  : 'translateX(0)'
              }`,
              width: isMobile ? '90%' : '40%',
              height: '85%',
              zIndex: 2,
              transition: `all ${SLIDER_CONFIG.TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              opacity: isTransitioning ? 0 : 1,
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(15px)'
            }}
          >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
              {/* Project Image Placeholder */}
              <Box
                sx={{
                  height: 120,
                  background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  fontSize: '3rem',
                  boxShadow: '0 8px 25px rgba(156, 39, 176, 0.3)'
                }}
              >
                🚀
              </Box>

              {/* Project Title */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                {currentProject.name}
              </Typography>

              {/* Project Description */}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
                {currentProject.description}
              </Typography>

              {/* Stats */}
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Chip
                  icon={<StarIcon />}
                  label={currentProject.stars}
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                />
                <Chip
                  icon={<ForkIcon />}
                  label={currentProject.forks}
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                />
              </Box>

              {/* Technologies */}
              <Box sx={{ mb: 2 }}>
                {currentProject.technologies.slice(0, 4).map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{ 
                      mr: 0.5, 
                      mb: 0.5,
                      background: 'rgba(156, 39, 176, 0.2)',
                      color: 'primary.main'
                    }}
                  />
                ))}
              </Box>

              {/* Links */}
              <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                <Button
                  component={Link}
                  href={currentProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="small"
                  startIcon={<LaunchIcon />}
                  sx={{ flexGrow: 1 }}
                >
                  Демо
                </Button>
                <Button
                  component={Link}
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon />}
                  sx={{ flexGrow: 1 }}
                >
                  GitHub
                </Button>
              </Box>
            </Box>
          </AnimatedCard>

          {/* Next Slide (Hidden on mobile) */}
          {!isMobile && (
            <AnimatedCard
              sx={{
                position: 'absolute',
                right: '5%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '25%',
                height: '70%',
                opacity: 0.6,
                zIndex: 1,
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.03)',
                '&:hover': {
                  transform: 'translateY(-50%) translateX(-10px)',
                  opacity: 0.8,
                  background: 'rgba(255, 255, 255, 0.05)'
                }
              }}
              onClick={() => nextSlide()}
            >
              <Typography variant="h6" noWrap sx={{ textAlign: 'center', mt: 2 }}>
                {projects[nextIndex].name}
              </Typography>
            </AnimatedCard>
          )}
        </Box>

        {/* Navigation Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, gap: 2 }}>
          <IconButton
            onClick={prevSlide}
            disabled={isTransitioning}
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'primary.main',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'scale(1.1)'
              },
              '&:disabled': {
                opacity: 0.5
              }
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          {/* Dots */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {projects.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: index === currentIndex ? 'primary.main' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: index === currentIndex ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
                    transform: 'scale(1.2)'
                  }
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={nextSlide}
            disabled={isTransitioning}
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'primary.main',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'scale(1.1)'
              },
              '&:disabled': {
                opacity: 0.5
              }
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
