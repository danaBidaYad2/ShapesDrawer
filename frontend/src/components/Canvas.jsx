import React, { useContext } from 'react';
import { CanvasGrid } from '../styles/canvas.styles';
import Grid from '@mui/material/Grid';
import { AppContext } from './App';

export const Canvas = () => {
  const { color, shape } = useContext(AppContext);

  return (
    <CanvasGrid container>
      <Grid item xs={12} sm={6} md={6}>
        Color: {color}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        Shape: {shape}
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        Canvas
      </Grid>
    </CanvasGrid>
  );
};
