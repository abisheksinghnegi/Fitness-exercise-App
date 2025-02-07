import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import davidlaidimg from '../assets/images/gymdavid.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Box 
      component="img"
      src={davidlaidimg}
      alt="hero-banner"
      sx={{ 
        width: { lg: '100%', xs: '100%' }, 
        maxWidth: '500px', 
        display: 'flex', 
        margin: { xs: '20px auto', lg: '0' }, 
        borderRadius: '12px' 
      }}
    />
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '207px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'flex', xs: 'none' }, fontSize: '200px' }}>
      LIFT
    </Typography>
    <Typography fontWeight={750} color="#FF2625" sx={{opacity: '0.1', display: { lg: 'flex', xs: 'none' }, fontSize: '140px' }}>
      EAT, SLEEP
    </Typography>
    <Typography fontWeight={600} color="#FF2625" sx={{opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      AND REPEAT
    </Typography>
    
  </Box>
);

export default HeroBanner;