import React, { useContext } from 'react';
import { CanvasGrid, CanvasInfoGrid, CanvasBoardGrid } from '../styles/canvas.styles';
import { AppContext } from './App';
import { CanvasBoard } from './CanvasBoard';

export const Canvas = React.forwardRef((_, ref) => {
  const { color, shape } = useContext(AppContext);

  return (
    <CanvasGrid container>
      <CanvasInfoGrid item xs={12} sm={6} md={6}>
        Color: {color}
      </CanvasInfoGrid>
      <CanvasInfoGrid item xs={12} sm={6} md={6}>
        Shape: {shape}
      </CanvasInfoGrid>
      <CanvasBoardGrid item xs={12} sm={12} md={12}>
        <CanvasBoard ref={ref} />
      </CanvasBoardGrid>
    </CanvasGrid>
  );
});
