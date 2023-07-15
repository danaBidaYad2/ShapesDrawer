import React, { createContext, useState } from 'react';
import { CanvasControllers } from './CanvasControllers';
import { Canvas } from './Canvas';
import { StyledContainer } from '../styles/app.styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();
export const queryClient = new QueryClient();

export const App = () => {
  const [color, setColor] = useState('yellow');
  const [shape, setShape] = useState('triangle');

  return (
    <AppContext.Provider value={{ color, setColor, shape, setShape }}>
      <QueryClientProvider client={queryClient}>
        <StyledContainer>
          <Canvas />
          <CanvasControllers />
        </StyledContainer>
      </QueryClientProvider>
    </AppContext.Provider>
  );
};
