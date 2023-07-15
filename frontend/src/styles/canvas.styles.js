import styled from 'styled-components';
import Grid from '@mui/material/Grid';

export const CanvasGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95%;
`;

export const CanvasInfoGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5%;
`;

export const CanvasBoardGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95%;
`;

export const StyledCanvas = styled.canvas`
  background-color: pink;
  border: '1px solid black';
`;
