import React, { useCallback, useContext } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CanvasControllersGrid } from '../styles/canvasControllers.styles';
import { useColorData } from '../hooks/useColorData';
import { useShapeData } from '../hooks/useShapeData';
import { AppContext } from './App';

export const CanvasControllers = () => {
  const { setColor, setShape } = useContext(AppContext);
  const { refetch: refetchShapeData } = useShapeData((response) => setShape(response.data), true);
  const { refetch: refetchColorData } = useColorData((response) => setColor(response.data), true);

  const reset = useCallback(() => {
    setColor('');
    setShape('');
  }, [setColor, setShape]);

  return (
    <CanvasControllersGrid container>
      <Grid item xs={2} sm={3} md={4}>
        <Button color='error' onClick={reset}>
          Reset
        </Button>
      </Grid>
      <Grid item xs={5} sm={5} md={5}>
        <Button color='primary' onClick={refetchShapeData}>
          Choose Random Shape
        </Button>
      </Grid>
      <Grid item xs={5} sm={4} md={3}>
        <Button color='secondary' onClick={refetchColorData}>
          Choose Random Color
        </Button>
      </Grid>
    </CanvasControllersGrid>
  );
};
