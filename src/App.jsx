import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExercisesDetails';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return(
    <Box width="400px" sx={{width:{xl:'1520px'}}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
  
};

export default App;