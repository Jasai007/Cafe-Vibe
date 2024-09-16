// components/MenuItem.js
import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MenuItem = ({ title, description }) => {
  return (
    <ListItem button>
      <ListItemText primary={title} secondary={description} />
      <ListItemIcon>
        <ArrowForwardIosIcon />
      </ListItemIcon>
    </ListItem>
  );
};

export default MenuItem;
