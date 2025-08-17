import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
  Grow,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

interface ExtrasProps {
  extras: string[];
}

export const Extras: React.FC<ExtrasProps> = ({ extras }) => {
  return (
    <Card id="extras">
      <CardContent>
        <Fade in timeout={800}>
          <Typography variant="h2" gutterBottom>
            Додаткова інформація
          </Typography>
        </Fade>
        
        <List>
          {extras.map((item, index) => (
            <Grow in timeout={1000 + index * 150} key={index}>
              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon 
                    color="success" 
                    sx={{ 
                      fontSize: 20,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2) rotate(5deg)',
                      },
                    }} 
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      transition: 'all 0.2s ease',
                    },
                  }}
                />
              </ListItem>
            </Grow>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
