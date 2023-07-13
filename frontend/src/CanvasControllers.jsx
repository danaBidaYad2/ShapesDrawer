import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CanvasControllersGrid } from './styles/canvasControllers.styles';

export const CanvasControllers = () => {
  return (
    <CanvasControllersGrid container>
      <Grid item xs={2} sm={3} md={4}>
        <Button
          color='error'
          onClick={() => {
            console.log('reset');
          }}
        >
          Reset
        </Button>
      </Grid>
      <Grid item xs={5} sm={5} md={5}>
        <Button
          color='primary'
          onClick={() => {
            console.log('random shape');
          }}
        >
          Choose Random Shape
        </Button>
      </Grid>
      <Grid item xs={5} sm={4} md={3}>
        <Button
          color='secondary'
          onClick={() => {
            console.log('random color');
          }}
        >
          Choose Random Color
        </Button>
      </Grid>
    </CanvasControllersGrid>
  );
};
