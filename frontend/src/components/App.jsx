import React, { createContext, useState, useRef } from 'react';
import { CanvasControllers } from './CanvasControllers';
import { Canvas } from './Canvas';
import { StyledContainer } from '../styles/app.styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();
export const queryClient = new QueryClient();

export const App = () => {
  const [color, setColor] = useState('yellow');
  const [shape, setShape] = useState('triangle');
  const contextRef = useRef(null);
  const canvasRef = useRef(null);
  const ref = {
    contextRef,
    canvasRef,
  };

  return (
    <AppContext.Provider value={{ color, setColor, shape, setShape }}>
      <QueryClientProvider client={queryClient}>
        <StyledContainer>
          <Canvas ref={ref} />
          <CanvasControllers ref={ref} />
        </StyledContainer>
      </QueryClientProvider>
    </AppContext.Provider>
  );
};
