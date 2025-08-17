import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Button,
  Chip,
  Link,
  Alert,
  CircularProgress,
  Fade,
  Grow,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  Star as StarIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { useGitHubRepos } from '../hooks/useGitHubRepos';

interface ProjectsProps {
  githubUsername: string;
}

export const Projects: React.FC<ProjectsProps> = ({ githubUsername }) => {
  const { repos, loading, error, loadRepos } = useGitHubRepos(githubUsername);

  React.useEffect(() => {
    loadRepos();
  }, [loadRepos]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <Card id="projects">
      <CardContent>
        <Fade in timeout={800}>
          <Typography variant="h2" gutterBottom>
            Вибрані проєкти
          </Typography>
        </Fade>
        
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={loadRepos}
            disabled={loading}
            sx={{ mb: 2 }}
          >
            {loading ? 'Завантаження...' : 'Оновити проєкти'}
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Помилка завантаження проєктів: {error}
          </Alert>
        )}

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {!loading && !error && repos.length === 0 && (
          <Alert severity="info">
            Проєкти не знайдено. Перевірте GitHub username або спробуйте пізніше.
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {repos.slice(0, 6).map((repo, index) => (
            <Grow in timeout={1000 + index * 150} key={repo.id}>
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
                    background: 'linear-gradient(180deg, #22c55e, #4ade80)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    borderColor: 'rgba(34, 197, 94, 0.3)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {repo.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {repo.description || 'Опис відсутній'}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
                      <Chip
                        icon={<StarIcon />}
                        label={repo.stargazers_count}
                        size="small"
                        sx={{ fontSize: '0.75rem' }}
                      />
                      <Chip
                        icon={<VisibilityIcon />}
                        label={repo.watchers_count}
                        size="small"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {repo.language && (
                      <Chip
                        label={repo.language}
                        size="small"
                        sx={{ 
                          fontSize: '0.75rem',
                          backgroundColor: 'rgba(79, 140, 255, 0.1)',
                          border: '1px solid rgba(79, 140, 255, 0.2)',
                        }}
                      />
                    )}
                    {repo.topics?.slice(0, 3).map((topic, topicIndex) => (
                      <Chip
                        key={topicIndex}
                        label={topic}
                        size="small"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    ))}
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener"
                      sx={{ textDecoration: 'none' }}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon />}
                        sx={{ 
                          borderRadius: 2,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Link>
                    {repo.homepage && (
                      <Link
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener"
                        sx={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<LanguageIcon />}
                          sx={{ 
                            borderRadius: 2,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              transform: 'translateY(-1px)',
                            },
                          }}
                        >
                          Демо
                        </Button>
                      </Link>
                    )}
                    <Typography variant="caption" color="text.secondary">
                      Оновлено: {formatDate(repo.updated_at)}
                    </Typography>
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
