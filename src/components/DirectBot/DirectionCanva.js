import React, { useContext, memo } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { DirectionContext } from "../../contexts/direction.context";
import { Stage, Layer } from "react-konva";
import Konva from "konva";
import { WIDTH, HEIGHT } from "../../constants/directbot";
import Line from "./Line";

const DirectionCanva = () => {
  const directions = useContext(DirectionContext);

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Paper
        elevation={11}
        style={{ width: WIDTH, height: HEIGHT, marginTop: "2em" }}
      >
        <Stage width={WIDTH} height={HEIGHT}>
          <Layer>
            {directions.map((direction, index) => {
              let color = Konva.Util.getRandomColor();
              let stroke = Math.floor(Math.random() * 4) + 1;

              return (
                <Line
                  key={index}
                  {...direction}
                  color={color}
                  strokeWidth={stroke}
                />
              );
            })}
          </Layer>
        </Stage>
      </Paper>
    </Grid>
  );
};

export default memo(DirectionCanva);
