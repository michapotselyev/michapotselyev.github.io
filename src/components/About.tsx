import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Link,
  Avatar,
  Fade,
  Grow,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material';
import type { Contact, Skills } from '../types/profile';

interface AboutProps {
  name: string;
  title: string;
  description: string;
  contact: Contact;
  skills: Skills;
}

export const About: React.FC<AboutProps> = ({
  name,
  title,
  description,
  contact,
  skills,
}) => {
  const contactItems = [
    { icon: <EmailIcon />, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: <PhoneIcon />, label: 'Телефон', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: <LocationIcon />, label: 'Місто', value: contact.city },
    { icon: <LinkedInIcon />, label: 'LinkedIn', value: '/in/mykhailo-potseluiev', href: contact.linkedin },
    { icon: <GitHubIcon />, label: 'GitHub', value: 'github.com/michapotselyev', href: contact.github },
    { icon: <TelegramIcon />, label: 'Telegram', value: '@mykhailo_potseluiev', href: contact.telegram },
  ];

  return (
    <Card id="about">
      <CardContent>
        <Fade in timeout={800}>
          <Typography variant="h1" gutterBottom>
            {name}
          </Typography>
        </Fade>
        
        <Grow in timeout={1000}>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </Grow>
        
        <Fade in timeout={1200}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {description}
          </Typography>
        </Fade>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Ключові компетенції
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.main.map((skill, index) => (
              <Grow in timeout={1400 + index * 100} key={index}>
                <Chip
                  label={skill}
                  size="small"
                  sx={{ 
                    fontSize: '0.75rem',
                    position: 'relative',
                    overflow: 'hidden',
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
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Контакти
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {contactItems.map((item, index) => (
              <Fade in timeout={1600 + index * 100} key={index}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  p: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(139, 92, 246, 0.05)',
                    transform: 'translateX(4px)',
                  },
                }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: 'primary.main',
                      fontSize: '0.875rem',
                      flexShrink: 0,
                      background: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
                      boxShadow: '0 2px 8px rgba(139, 92, 246, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        boxShadow: '0 4px 16px rgba(139, 92, 246, 0.4)',
                      },
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      {item.label}
                    </Typography>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                        sx={{ 
                          display: 'block', 
                          textDecoration: 'none',
                          wordBreak: 'break-word',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            textDecoration: 'underline',
                            textShadow: '0 0 8px rgba(139, 92, 246, 0.5)',
                          }
                        }}
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                        {item.value}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Fade>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
