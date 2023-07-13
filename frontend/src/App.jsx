import React from 'react';
import { CanvasControllers } from './CanvasControllers';
import { Canvas } from './Canvas';
import { StyledContainer } from './styles/app.styles';

export const App = () => {
  return (
    <StyledContainer>
      <Canvas />
      <CanvasControllers />
    </StyledContainer>
  );
};
