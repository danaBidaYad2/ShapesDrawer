import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { StyledCanvas } from '../styles/canvas.styles';
import { AppContext } from './App';

export const CanvasBoard = React.forwardRef((_, { contextRef, canvasRef }) => {
  const { color, shape } = useContext(AppContext);
  const isDrawing = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);

  const handleMouseDown = useCallback((event) => {
    startX.current = event.offsetX;
    startY.current = event.offsetY;
    isDrawing.current = true;
  }, []);

  const handleMouseUp = useCallback(
    (event) => {
      if (!isDrawing.current) return;

      let { offsetX, offsetY } = event;
      let context = contextRef.current;

      if (shape === 'line') {
        context.beginPath();
        context.moveTo(startX.current, startY.current);
        context.lineTo(offsetX, offsetY);
        context.stroke();
      } else if (shape === 'triangle') {
        context.beginPath();
        context.moveTo(startX.current, startY.current);
        context.lineTo(offsetX, offsetY);
        context.lineTo(startX.current - (offsetX - startX.current), offsetY);
        context.closePath();
        context.stroke();
      } else if (shape === 'rectangle') {
        let width = offsetX - startX.current;
        let height = offsetY - startY.current;
        context.strokeRect(startX.current, startY.current, width, height);
      } else if (shape === 'circle') {
        let radius = Math.sqrt((offsetX - startX.current) ** 2 + (offsetY - startY.current) ** 2);
        context.beginPath();
        context.arc(startX.current, startY.current, radius, 0, 2 * Math.PI);
        context.stroke();
      }
      isDrawing.current = false;
    },
    [shape, contextRef]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = color;
    context.lineWidth = 1;

    contextRef.current = context;

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [color, shape, handleMouseDown, handleMouseUp, contextRef, canvasRef]);

  return <StyledCanvas width={1000} height={600} ref={canvasRef} />;
});
