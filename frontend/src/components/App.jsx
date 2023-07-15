import React, { createContext, useState } from 'react';
import { CanvasControllers } from './CanvasControllers';
import { Canvas } from './Canvas';
import { StyledContainer } from '../styles/app.styles';
import { QueryClient, QueryClientProvider } from 'react-query';

export const AppContext = createContext();
const queryClient = new QueryClient();

export const App = () => {
  const [color, setColor] = useState('dana');
  const [shape, setShape] = useState('dana');

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
