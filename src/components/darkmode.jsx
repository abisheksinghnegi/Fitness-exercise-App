import React from 'react'
import { Switch } from '@mui/material';

const label={inputProps:{'area-label':'switch demo'}};

function Darkmode({change,check}) {
  return (
    <Switch {...label} defaultChecked color="default" onChange={change} checked={check}/>
  )
}

export default Darkmode