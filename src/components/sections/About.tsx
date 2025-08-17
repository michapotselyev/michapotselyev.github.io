import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Link,
  Fade,
  Grow,
  Paper,
  Chip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Telegram as TelegramIcon
} from '@mui/icons-material';
import type { Contact } from '../../types/profile';
import { SectionTitle } from '../ui/SectionTitle';
import { getStaggeredDelay } from '../../utils';
import avatar from '../../assets/me.jpg';

interface AboutProps {
  name: string;
  title: string;
  description: string;
  contact: Contact;
}

const contactItems = [
  { key: 'email', icon: EmailIcon, label: 'Email', color: '#EA4335' },
  { key: 'phone', icon: PhoneIcon, label: 'Телефон', color: '#25D366' },
  { key: 'city', icon: LocationIcon, label: 'Місто', color: '#FF6B35' },
  { key: 'linkedin', icon: LinkedInIcon, label: 'LinkedIn', color: '#0077B5' },
  { key: 'github', icon: GitHubIcon, label: 'GitHub', color: '#333333' },
  { key: 'telegram', icon: TelegramIcon, label: 'Telegram', color: '#0088CC' }
] as const;

export const About: React.FC<AboutProps> = ({ name, title, description, contact }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="about" sx={{ py: { xs: 8, sm: 10, md: 12 }, position: 'relative' }}>
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: 100, sm: 150, md: 200 },
          height: { xs: 100, sm: 150, md: 200 },
          background: 'radial-gradient(circle, rgba(156, 39, 176, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
            '50%': { transform: 'scale(1.2)', opacity: 0.6 }
          }
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: { xs: 80, sm: 120, md: 150 },
          height: { xs: 80, sm: 120, md: 150 },
          background: 'radial-gradient(circle, rgba(103, 58, 183, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' }
          }
        }}
      />

      <SectionTitle>Про мене</SectionTitle>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: { xs: 4, sm: 5, md: 6 },
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        
        {/* Main content container */}
        <Box sx={{ 
          width: '100%', 
          maxWidth: 1440,
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: { xs: 'center', lg: 'flex-start' },
          gap: { xs: 4, sm: 5, lg: 5 }
        }}>
          
          {/* Hero Section with Avatar and Name */}
          <Fade in timeout={1000}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 6 },
                borderRadius: { xs: 3, sm: 4 },
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                minWidth: { xs: '100%', sm: 320, md: 400 },
                maxWidth: { xs: '100%', sm: 450, md: 500 },
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
              {/* Avatar with enhanced styling */}
              <Box sx={{ position: 'relative', display: 'inline-block', mb: { xs: 3, sm: 4 } }}>
                <Avatar
                  src={avatar}
                  sx={{
                    width: { xs: 100, sm: 120, md: 140 },
                    height: { xs: 100, sm: 120, md: 140 },
                    background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 50%, #3f51b5 100%)',
                    boxShadow: '0 20px 40px rgba(156, 39, 176, 0.3)',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    border: '4px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -8,
                      left: -8,
                      right: -8,
                      bottom: -8,
                      background: 'linear-gradient(135deg, #9c27b0, #673ab7, #3f51b5)',
                      borderRadius: '50%',
                      zIndex: -1,
                      opacity: 0.3,
                      animation: 'rotate 10s linear infinite',
                      '@keyframes rotate': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' }
                      }
                    }
                  }}
                />
              </Box>

              {/* Name with gradient text */}
              <Typography 
                variant={isMobile ? "h4" : "h3"}
                component="h1" 
                sx={{ 
                  fontWeight: 800,
                  mb: { xs: 1.5, sm: 2 },
                  background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 50%, #3f51b5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                }}
              >
                {name}
              </Typography>
              
              {/* Title with enhanced styling */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: { xs: 2, sm: 3 } }}>
                <Typography 
                  variant={isMobile ? "h6" : "h5"}
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    letterSpacing: { xs: 1, sm: 2 },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                  }}
                >
                  {title}
                </Typography>
              </Box>

              {/* Experience badges */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 1, sm: 2 }, 
                justifyContent: 'center',
                mb: { xs: 2, sm: 3, md: 4 },
                flexWrap: 'wrap'
              }}>
                <Chip 
                  label="Senior Level" 
                  color="primary" 
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    fontWeight: 600,
                    borderColor: 'primary.main',
                    color: 'primary.main'
                  }}
                />
                <Chip 
                  label="Full Stack" 
                  color="secondary" 
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    fontWeight: 600,
                    borderColor: 'secondary.main',
                    color: 'secondary.main'
                  }}
                />
                <Chip 
                  label="Web Expert" 
                  color="primary" 
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    fontWeight: 600,
                    borderColor: 'primary.main',
                    color: 'primary.main'
                  }}
                />
              </Box>
            </Paper>
          </Fade>

          {/* Description with enhanced styling */}
          <Grow in timeout={1200}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 4 },
                borderRadius: { xs: 3, sm: 3 },
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxWidth: { xs: '100%', lg: 900 },
                minWidth: { xs: '100%', sm: 320 },
                flex: 1
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: 'left', sm: 'justify' },
                  lineHeight: { xs: 1.6, sm: 1.8, md: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  color: 'text.primary',
                  fontWeight: 400,
                  '&::first-letter': {
                    fontSize: { xs: '2rem', sm: '2.2rem', md: '2.5rem' },
                    fontWeight: 700,
                    color: 'primary.main',
                    float: 'left',
                    lineHeight: 0.5,
                    marginRight: { xs: '0.3rem', sm: '0.5rem' },
                    marginTop: { xs: '0.1rem', sm: '0.2rem' }
                  }
                }}
              >
                {description}
              </Typography>
            </Paper>
          </Grow>
        </Box>

        {/* Contact Section with enhanced design */}
        <Box sx={{ width: '100%', maxWidth: 1440 }}>
          <Typography 
            variant={isMobile ? "h6" : "h5"}
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 3, sm: 4 }, 
              fontWeight: 600,
              color: 'text.primary',
              position: 'relative',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: 40, sm: 60 },
                height: 2,
                background: 'linear-gradient(90deg, transparent 0%, #9c27b0 50%, transparent 100%)'
              }
            }}
          >
            Зв'яжіться зі мною
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
              },
              gap: { xs: 2, sm: 3 },
              px: { xs: 1, sm: 2 }
            }}
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const value = contact[item.key as keyof Contact];
              
              if (!value) return null;

              return (
                <Grow key={item.key} in timeout={800 + getStaggeredDelay(index, 150)}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      borderRadius: { xs: 2, sm: 3 },
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      minHeight: { xs: 80, sm: 100 },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(156, 39, 176, 0.2)',
                        borderColor: 'primary.main',
                        '& .contact-icon': {
                          background: 'rgba(156, 39, 176, 0.2)',
                          transform: 'scale(1.1) rotate(5deg)'
                        }
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 } }}>
                      <Box
                        className="contact-icon"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 40, sm: 50 },
                          height: { xs: 40, sm: 50 },
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          flexShrink: 0
                        }}
                      >
                        <Icon sx={{ fontSize: { xs: 20, sm: 24 }, color: item.color }} />
                      </Box>
                      
                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            display: 'block',
                            color: 'text.secondary',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: { xs: 0.5, sm: 1 },
                            mb: 0.5,
                            fontSize: { xs: '0.7rem', sm: '0.75rem' }
                          }}
                        >
                          {item.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            wordBreak: 'break-word',
                            color: 'text.primary',
                            fontSize: { xs: '0.8rem', sm: '0.875rem' },
                            lineHeight: 1.4
                          }}
                        >
                          {item.key === 'email' || item.key === 'linkedin' || item.key === 'github' || item.key === 'telegram' ? (
                            <Link
                              href={value}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  color: item.color,
                                  textDecoration: 'none',
                                  textShadow: `0 0 8px ${item.color}40`
                                }
                              }}
                            >
                              {value}
                            </Link>
                          ) : (
                            value
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grow>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
