import React from 'react';
import { Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'switch demo' } };

function Darkmode({ change, check }) {
  return (
    <Switch {...label} color="default" onChange={change} checked={check} />
  );
}

export default Darkmode;
