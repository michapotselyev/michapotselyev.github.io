import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Grid, Box } from '@mui/material';
import { theme } from './theme';
import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Extras } from './components/Extras';
import { Footer } from './components/Footer';
import { useProfile } from './hooks/useProfile';
import './styles/print.css';

// Космический фон
const SpaceBackground: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 70%, #000000 100%)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(2px 2px at 20px 30px, rgba(139, 92, 246, 0.3), transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(192, 132, 252, 0.2), transparent),
          radial-gradient(1px 1px at 90px 40px, rgba(139, 92, 246, 0.4), transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(192, 132, 252, 0.3), transparent),
          radial-gradient(2px 2px at 160px 30px, rgba(139, 92, 246, 0.2), transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px',
        animation: 'twinkle 20s linear infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(3px 3px at 50px 50px, rgba(139, 92, 246, 0.4), transparent),
          radial-gradient(2px 2px at 120px 20px, rgba(192, 132, 252, 0.3), transparent),
          radial-gradient(1px 1px at 180px 60px, rgba(139, 92, 246, 0.5), transparent),
          radial-gradient(2px 2px at 220px 90px, rgba(192, 132, 252, 0.2), transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 150px',
        animation: 'twinkle 15s linear infinite reverse',
      },
      '@keyframes twinkle': {
        '0%': { transform: 'translateY(0px)' },
        '100%': { transform: 'translateY(-100px)' },
      },
    }}
  />
);

// Плавающие частицы
const FloatingParticles: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '2px',
        height: '2px',
        background: 'rgba(139, 92, 246, 0.6)',
        borderRadius: '50%',
        animation: 'float1 25s ease-in-out infinite',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: '3px',
        height: '3px',
        background: 'rgba(192, 132, 252, 0.4)',
        borderRadius: '50%',
        animation: 'float2 30s ease-in-out infinite',
      },
      '@keyframes float1': {
        '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
        '25%': { transform: 'translate(100px, -50px) rotate(90deg)' },
        '50%': { transform: 'translate(50px, -100px) rotate(180deg)' },
        '75%': { transform: 'translate(-50px, -50px) rotate(270deg)' },
      },
      '@keyframes float2': {
        '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
        '33%': { transform: 'translate(-80px, -80px) rotate(120deg)' },
        '66%': { transform: 'translate(80px, -120px) rotate(240deg)' },
      },
    }}
  />
);

function App() {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SpaceBackground />
        <FloatingParticles />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            color: 'text.primary',
          }}
        >
          Завантаження...
        </Box>
      </ThemeProvider>
    );
  }

  if (error) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SpaceBackground />
        <FloatingParticles />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            color: 'error.main',
          }}
        >
          Помилка завантаження: {error}
        </Box>
      </ThemeProvider>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SpaceBackground />
      <FloatingParticles />
      
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <Header name={profile.name} title={profile.title} />
        
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <About
                name={profile.name}
                title={profile.title}
                description={profile.description}
                contact={profile.contact}
                skills={profile.skills}
              />
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Skills skills={profile.skills} />
            </Grid>
            
            <Grid item xs={12}>
              <Experience experience={profile.experience} />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Education education={profile.education} />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Extras extras={profile.extras} />
            </Grid>
            
            <Grid item xs={12}>
              <Projects githubUsername={profile.github.username} />
            </Grid>
          </Grid>
        </Container>
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
