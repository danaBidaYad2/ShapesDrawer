import React, { useContext, useEffect } from 'react';
import { StyledCanvas } from '../styles/canvas.styles';
import { AppContext } from './App';

export const CanvasBoard = React.forwardRef((_, { contextRef, canvasRef }) => {
  const { color, shape } = useContext(AppContext);
  let isDrawing = false,
    startX,
    startY;

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
  }, [color, shape]);

  const handleMouseDown = (event) => {
    startX = event.offsetX;
    startY = event.offsetY;
    isDrawing = true;
  };

  const handleMouseUp = (event) => {
    if (!isDrawing) return;

    let { offsetX, offsetY } = event;
    let context = contextRef.current;

    if (shape === 'line') {
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else if (shape === 'triangle') {
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(offsetX, offsetY);
      context.lineTo(startX - (offsetX - startX), offsetY);
      context.closePath();
      context.stroke();
    } else if (shape === 'rectangle') {
      let width = offsetX - startX;
      let height = offsetY - startY;
      context.strokeRect(startX, startY, width, height);
    } else if (shape === 'circle') {
      let radius = Math.sqrt((offsetX - startX) ** 2 + (offsetY - startY) ** 2);
      context.beginPath();
      context.arc(startX, startY, radius, 0, 2 * Math.PI);
      context.stroke();
    }
    isDrawing = false;
  };

  return <StyledCanvas width={1000} height={600} ref={canvasRef} />;
});
