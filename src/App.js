// App.js
import React from 'react';
import { Container, Typography, Box, List, Button } from '@mui/material';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import ImageGrid from './components/ImageGrid';

const App = () => {
  const spaceImages = [
    'https://cdn.usegalileo.ai/stability/0f116016-0297-427d-ade5-c1dcc8b31bd8.png',
    'https://cdn.usegalileo.ai/stability/0fd6cff5-9714-4d9e-82c0-093f6b612998.png',
    'https://cdn.usegalileo.ai/stability/42ecb2f1-ff58-4575-8177-3074b712ddcf.png',
    'https://lh3.googleusercontent.com/p/AF1QipNhpHEwm_F5l4rVKF4Osw1IYtn5Y1OvbNKYa7Zy=s1360-w1360-h1020',
  ];

  const awardsImages = [
    'https://cdn.usegalileo.ai/stability/74340337-373a-4841-bbe7-442158d3a6d1.png',
    'https://cdn.usegalileo.ai/stability/32fac54f-e096-45c2-b274-67a6920b5f70.png',
    'https://cdn.usegalileo.ai/stability/1e938f07-0846-409c-94b8-5618a301dab5.png',
    'https://cdn.usegalileo.ai/stability/a4e54834-14bc-42f5-aba4-81150b074898.png',
    'https://cdn.usegalileo.ai/stability/e88d91c2-6e37-4d09-a329-5d6213eee121.png',
  ];

  return (
    <div>
      <Header />
      <Container>
        {/* Welcome Section */}
        <Box my={4}>
          <img
            src="https://cdn.usegalileo.ai/stability/955f994c-2d54-41bd-8363-540d0412f383.png"
            alt="Restaurant"
            style={{ width: '100%', borderRadius: 4 }}
          />
          <Typography variant="h5" gutterBottom>
            Welcome to The Dorian
          </Typography>
          <Typography>
            We are a restaurant and bar located in the heart of San Francisco's Marina District. Our space is inspired by
            the grand, turn-of-the-century homes that once lined the neighborhood.
          </Typography>
        </Box>

        {/* Menu Section */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            Our Menu
          </Typography>
          <List>
            <MenuItem title="Dinner" description="View menu" />
            <MenuItem title="Brunch" description="View menu" />
            <MenuItem title="Happy Hour" description="View menu" />
          </List>
        </Box>

        {/* Our Space Section */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            Our Space
          </Typography>
          <ImageGrid images={spaceImages} />
        </Box>

        {/* Awards & Accolades Section */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            Awards & Accolades
          </Typography>
          <ImageGrid images={awardsImages} />
        </Box>

        {/* Get Directions Button */}
        <Box textAlign="center" my={4}>
          <Button
            variant="contained"
            color="primary"
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                ></path>
              </svg>
            }
          >
            Get directions
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default App;
