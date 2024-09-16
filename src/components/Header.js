// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const Header = () => {
  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          Menu
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="share">
          <ShareIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
