import React, { useCallback, useContext } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CanvasControllersGrid } from '../styles/canvasControllers.styles';
import { useColorData } from '../hooks/useColorData';
import { useShapeData } from '../hooks/useShapeData';
import { AppContext, queryClient } from './App';

export const CanvasControllers = React.forwardRef(
  (_, { contextRef, canvasRef }) => {
    const { setColor, setShape } = useContext(AppContext);
    useShapeData({
      onSuccess: (response) => setShape(response?.data?.name),
    });
    useColorData({
      onSuccess: (response) => setColor(response?.data?.name),
    });

    const reset = useCallback(() => {
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }, [contextRef, canvasRef]);

    const onRandomShapeClicked = () => {
      queryClient.refetchQueries({ queryKey: ['shape'] });
    };

    const onRandomColorClicked = () => {
      queryClient.refetchQueries({ queryKey: ['color'] });
    };

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
  }
);
