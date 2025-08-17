import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { SectionTitle } from '../ui/SectionTitle';
import { getStaggeredDelay } from '../../utils';

interface ExtrasProps {
  extras: string[];
}

export const Extras: React.FC<ExtrasProps> = ({ extras }) => {
  return (
    <Box id="extras" sx={{ py: 8 }}>
      <SectionTitle>Додаткова інформація</SectionTitle>
      
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <List>
          {extras.map((extra, index) => (
            <ListItem
              key={index}
              sx={{
                py: 1,
                px: 0,
                animation: `fadeInUp 0.6s ease ${getStaggeredDelay(index, 100)}ms both`
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <CheckCircleIcon
                  color="success"
                  sx={{
                    fontSize: 24,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={extra}
                primaryTypographyProps={{
                  variant: 'body1',
                  sx: {
                    lineHeight: 1.7,
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
