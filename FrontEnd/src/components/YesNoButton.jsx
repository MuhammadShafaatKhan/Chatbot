import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';


const YesNoButton = (props) => {
  console.log('p', props)
  return (
    <div>
        <Button 
          sx={{ m: 0.5, marginLeft:'18.833px' }} 
          variant="contained" 
          onClick={
            () => {
            props.actions.handleSportsResp(true)
          }
          }
          >Yes</Button>
        <Button 
          sx={{ m: 0.5 }} 
          variant="contained"
          onClick={
            () => {
            props.actions.handleSportsResp(false)
          }
        }
          >No</Button>
    </div>
  );
};

export default YesNoButton