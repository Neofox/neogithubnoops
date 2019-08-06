import React from "react";
import { Line as LineKonva } from "react-konva";
import { WIDTH, HEIGHT } from "../../constants/directbot";

const LineAnimated = ({
  direction,
  coordinates = {},
  distance,
  color = "black",
  strokeWidth = 4
}) => {
  const points = calculatePoints(direction, distance, coordinates);

  return (
    <LineKonva
      sceneFunc={ctx => {
        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.map(point => {
          ctx.lineTo(point.x, point.y);
        });

        ctx.stroke();
      }}
      tension={1}
    />
  );
};

const getRandomCoordinates = () => {
  return {
    x: Math.floor(Math.random() * WIDTH),
    y: Math.floor(Math.random() * HEIGHT)
  };
};

const calculatePoints = (direction, distance, coordinates) => {
  if (Object.entries(coordinates).length !== 0) {
    const { a, b } = coordinates;
    return [a.x, a.y, b.x, b.y];
  }

  const { x, y } = getRandomCoordinates();
  let points = [{ x, y }];
  switch (direction) {
    case "up":
      for (let i = 1; i <= distance; i++) {
        points.push({ x, y: y + i });
      }
      break;
    case "down":
      for (let i = 1; i <= distance; i++) {
        points.push({ x, y: y - i });
      }
      break;
    case "left":
      for (let i = 1; i <= distance; i++) {
        points.push({ x: x - i, y });
      }
      break;
    case "right":
      for (let i = 1; i <= distance; i++) {
        points.push({ x: x + i, y });
      }
      break;
  }
  return points;
};

export default LineAnimated;
