import React, { memo } from "react";
import { Line as LineKonva } from "react-konva";
import { WIDTH, HEIGHT } from "../../constants/directbot";

const Line = ({
  direction,
  coordinates = {},
  distance,
  color = "black",
  strokeWidth = 4
}) => {
  const points = calculatePoints(direction, distance, coordinates);

  return (
    <LineKonva
      x={0}
      y={0}
      points={points}
      stroke={color}
      onClick={e => console.log(e)}
      strokeWidth={strokeWidth}
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
  let points = [x, y];
  switch (direction) {
    case "up":
      points.push(x, y + distance);
      break;
    case "down":
      points.push(x, y - distance);
      break;
    case "left":
      points.push(x - distance, y);
      break;
    case "right":
      points.push(x + distance, y);
      break;
  }

  return points;
};

export default memo(Line);
