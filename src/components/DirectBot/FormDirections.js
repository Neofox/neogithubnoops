import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import { DispatchContext } from "../../contexts/direction.context";
import { API_SUCCESS } from "../../constants/actionsTypes";
import { WIDTH, HEIGHT, DIRECT_BOT_URL } from "../../constants/directbot";
import useApiRequest from "../../hooks/useApiRequest";
import { add } from "../../actions/direction.action";

const FormDirections = () => {
  const dispatch = useContext(DispatchContext);
  const [state, setFormVal] = useState({
    connected: false,
    count: 1,
    pattern: ""
  });

  const [{ status, response }, makeRequest] = useApiRequest(
    `${DIRECT_BOT_URL}?count=${state.count}&connected=${Number(
      state.connected
    )}&width=${WIDTH / 2}&height=${HEIGHT / 2}&pattern=${
      state.pattern
    }&distance=50`
  );

  const handleChange = e => {
    setFormVal({ ...state, [e.target.name]: e.target.value });
  };
  const handleCheckboxChange = e => {
    setFormVal({
      ...state,
      [e.target.name]: e.target.checked
    });
  };

  useEffect(() => console.log(state));

  useEffect(() => {
    if (status === API_SUCCESS) {
      dispatch(add(response.data.directions));
    }
  }, [status]);

  return (
    <form autoComplete="off" noValidate>
      <Paper>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item md={3} style={{ paddingLeft: "2em" }}>
            <TextField
              name="count"
              label="Number of directions"
              value={state.count}
              onChange={handleChange}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              autoFocus
            />
          </Grid>
          <Grid item md={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.connected}
                  name="connected"
                  label="connected"
                  onChange={handleCheckboxChange}
                  value="connected"
                  inputProps={{
                    "aria-label": "primary checkbox"
                  }}
                />
              }
              label="connected"
            />
          </Grid>
          <Grid item md={3}>
            <FormControl
              variant="outlined"
              style={{ margin: 8, minWidth: 120 }}
            >
              <InputLabel htmlFor="pattern-select">Pattern</InputLabel>
              <Select
                value={state.pattern}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    labelWidth={55}
                    name="pattern"
                    id="pattern-select"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="invader">Invader</MenuItem>
                <MenuItem value="chevron">Chevron</MenuItem>
                <MenuItem value="right,up,right,down,right,down,left,down,left,up,left,up">
                  Cross
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <Button onClick={makeRequest} color="primary" variant="contained">
              Get new directions
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default FormDirections;
