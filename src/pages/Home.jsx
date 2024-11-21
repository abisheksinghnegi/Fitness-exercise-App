import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/searchexercises';
import HeroBanner from '../components/HeroBanner';
import video from '../assets/images/video.mp4'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all');
  console.log(bodyPart)

  return (
    <Box>
      <video src={video} autoPlay loop muted></video>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;