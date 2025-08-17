import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box, CircularProgress, Typography } from '@mui/material';
import { theme } from './theme';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
// import { Projects } from './components/sections/Projects';
import { Extras } from './components/sections/Extras';
import { BackgroundEffects } from './components/ui/BackgroundEffects';
import { useProfile } from './hooks/useProfile';
import './styles/print.css';

const LoadingSpinner: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: 2,
      color: 'text.primary'
    }}
  >
    <CircularProgress size={60} />
    <Typography variant="h6" color="text.secondary">
      Завантаження резюме...
    </Typography>
  </Box>
);

const ErrorDisplay: React.FC<{ error: string }> = ({ error }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: 2,
      textAlign: 'center',
      color: 'text.primary'
    }}
  >
    <Typography variant="h4" color="error" gutterBottom>
      Помилка завантаження
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {error}
    </Typography>
  </Box>
);

const App: React.FC = () => {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BackgroundEffects />
        <LoadingSpinner />
      </ThemeProvider>
    );
  }

  if (error || !profile) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BackgroundEffects />
        <ErrorDisplay error={error || 'Профіль не знайдено'} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundEffects />
      
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <Header />
        
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <Box component="main">
            <About
              name={profile.name}
              title={profile.title}
              description={profile.description}
              contact={profile.contact}
            />
            
            <Skills skills={profile.skills} />
            
            <Experience experience={profile.experience} />
            
            <Education education={profile.education} />
            
            {/* <Projects /> */}
            
            <Extras extras={profile.extras} />
          </Box>
        </Container>
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
