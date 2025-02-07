import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import video from '../assets/images/video.mp4';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  console.log(bodyPart);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Responsive Video Wrapper */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: isSmallScreen ? '56.25%' : '40%',
          mb: 4
        }}
      >
        <Box
          component="video"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;