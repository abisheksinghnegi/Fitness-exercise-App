
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/aestheticgymlogo.jpg';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '109px', height: '111px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">PROJECT BY <b><i>ABHISHEK SINGH NEGI</i></b></Typography>
  </Box>
);

export default Footer;
