// components/ImageGrid.js
import React from 'react';
import { Grid } from '@mui/material';

const ImageGrid = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={index === 0 ? 12 : 6} sm={index === 0 ? 12 : 6} key={index}>
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              paddingBottom: index === 0 ? '66%' : '100%',
              width: '100%',
              borderRadius: 4,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGrid;
