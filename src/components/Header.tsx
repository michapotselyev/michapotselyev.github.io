import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import {
  Print as PrintIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

interface HeaderProps {
  name: string;
  title: string;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header: React.FC<HeaderProps> = ({ name, title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const targetPosition = element.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      if (mobileOpen) {
        setMobileOpen(false);
      }
    }
  };

  const navItems = [
    { id: 'about', label: 'Про мене' },
    { id: 'skills', label: 'Стек' },
    { id: 'experience', label: 'Досвід' },
    { id: 'education', label: 'Освіта' },
    { id: 'contact', label: 'Контакти' },
  ];

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            background: 'linear-gradient(135deg, #4f8cff, #7c5cff)',
            boxShadow: '0 4px 12px rgba(79, 140, 255, 0.3)',
          }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(79, 140, 255, 0.1)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '1rem',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          fullWidth
          sx={{ borderRadius: 2 }}
        >
          Завантажити PDF
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="sticky" 
          elevation={0}
          sx={{
            background: 'linear-gradient(180deg, rgba(11,15,25,0.95), rgba(11,15,25,0.8))',
            backdropFilter: 'saturate(1.2) blur(10px)',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
              {/* Brand */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 6px 20px rgba(139, 92, 246, 0.4)',
                    },
                  }}
                />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {title}
                  </Typography>
                </Box>
              </Box>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                    }}
                  >
                    {navItems.map((item) => (
                      <Button
                        key={item.id}
                        color="inherit"
                        size="small"
                        onClick={() => scrollToSection(item.id)}
                        sx={{
                          borderRadius: 999,
                          px: 2,
                          py: 0.5,
                          fontSize: '0.875rem',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Desktop Print Button */}
              {!isMobile && (
                <Button
                  variant="contained"
                  startIcon={<PrintIcon />}
                  onClick={handlePrint}
                  sx={{ 
                    ml: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Завантажити PDF
                </Button>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 'auto' }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: 'linear-gradient(180deg, #0b0f19, #111727)',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
