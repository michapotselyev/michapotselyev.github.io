import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Slide,
  useMediaQuery,
  useTheme,
  Box,
  Tooltip
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Download as DownloadIcon
} from '@mui/icons-material';
import { NAV_ITEMS } from '../../constants';
import { scrollToSection } from '../../utils';
import avatar from '../../assets/me.jpg';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace('#', ''));
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const handleDownloadResume = () => {
    if (isMobile) {
      setMobileOpen(false);
    }

    setTimeout(() => {
      window.print();
    }, 1000);
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', zIndex: 1000 }}>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar
          src={avatar}
          sx={{
            width: 80,
            height: 80,
            mx: 'auto',
            mb: 2,
            background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
            boxShadow: theme.shadows[4]
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Mykhailo Potseluiev
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Senior Full-Stack Developer
        </Typography>
      </Box>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(103, 58, 183, 0.1) 100%)',
                }
              }}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  sx: { fontWeight: 500 }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      {/* Download button in mobile menu */}
      <Box sx={{ p: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handleDownloadResume}
          sx={{
            background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
            color: 'white',
            fontWeight: 600,
            py: 1.5,
            '&:hover': {
              background: 'linear-gradient(135deg, #673ab7 0%, #3f51b5 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(156, 39, 176, 0.3)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          Завантажити резюме
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Header с анимацией скрытия при открытии мобильного меню */}
      <Slide 
        direction="down" 
        in={!mobileOpen} 
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <AppBar
          position="fixed"
          sx={{
            background: 'rgba(18, 18, 18, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: theme.zIndex.drawer + 1
          }}
        >
          <Toolbar>
            <Avatar
              src={avatar}
              sx={{
                width: 40,
                height: 40,
                mr: 2,
                background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                boxShadow: theme.shadows[2]
              }}
            />
            
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Mykhailo Potseluiev
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.id}
                    color="inherit"
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      fontWeight: 500,
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-1px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                
                {/* Download button in desktop header */}
                <Tooltip title="Завантажити резюме">
                  <IconButton
                    onClick={handleDownloadResume}
                    sx={{
                      ml: 2,
                      background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                      color: 'white',
                      width: 40,
                      height: 40,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #673ab7 0%, #3f51b5 100%)',
                        transform: 'translateY(-2px) scale(1.05)',
                        boxShadow: '0 8px 25px rgba(156, 39, 176, 0.3)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <DownloadIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              background: 'rgba(18, 18, 18, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRight: '1px solid rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
