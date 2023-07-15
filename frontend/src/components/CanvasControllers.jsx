import React, { useCallback, useContext } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CanvasControllersGrid } from '../styles/canvasControllers.styles';
import { useColorData } from '../hooks/useColorData';
import { useShapeData } from '../hooks/useShapeData';
import { AppContext, queryClient } from './App';

export const CanvasControllers = () => {
  const { setColor, setShape } = useContext(AppContext);
  useShapeData((response) => setShape(response.data), false);
  useColorData((response) => setColor(response.data), false);

  const reset = useCallback(() => {
    setColor('');
    setShape('');
  }, [setColor, setShape]);

  const onRandomShapeClicked = useCallback(() => {
    queryClient.refetchQueries({ queryKey: ['shape'] });
  }, []);

  const onRandomColorClicked = useCallback(() => {
    queryClient.refetchQueries({ queryKey: ['color'] });
  }, []);

  return (
    <CanvasControllersGrid container>
      <Grid item xs={2} sm={3} md={4}>
        <Button color='error' onClick={reset}>
          Reset
        </Button>
      </Grid>
      <Grid item xs={5} sm={5} md={5}>
        <Button color='primary' onClick={onRandomShapeClicked}>
          Choose Random Shape
        </Button>
      </Grid>
      <Grid item xs={5} sm={4} md={3}>
        <Button color='secondary' onClick={onRandomColorClicked}>
          Choose Random Color
        </Button>
      </Grid>
    </CanvasControllersGrid>
  );
};
