import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

export const CanvasControllers = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <Button
          // startIcon={<DeleteIcon />}
          color='error'
          onClick={() => {
            console.log('reset');
          }}
        >
          Reset
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button
          // startIcon={<DeleteIcon />}
          color='primary'
          onClick={() => {
            console.log('random shape');
          }}
        >
          Choose Random Shape
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button
          // startIcon={<DeleteIcon />}
          color='secondary'
          onClick={() => {
            console.log('random color');
          }}
        >
          Choose Random Color
        </Button>
      </Grid>
    </Grid>
  );
};
