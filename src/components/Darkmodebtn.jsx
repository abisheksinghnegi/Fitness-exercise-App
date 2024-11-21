import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Darkmode from './darkmode';




function Darkmodebtn() {
  const [darkmode, setdarkmode] = useState(false)
    const darkTheme = createTheme({
      palette: {
        mode: darkmode?'dark':'light',
      },
    });
    return(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Darkmode check={darkmode} change={()=>setdarkmode(!darkmode)}/>
    </ThemeProvider>
    )

}

export default Darkmodebtn;