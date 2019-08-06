import * as types from "../constants/actionsTypes";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_DIRECTION:
      return action.directions;
    case types.SET_DIRECTION_CONNECTED:
      return state.map(direction =>
        direction.id === action.id ? { ...direction } : direction
      );
    default:
      return state;
  }
};
export default reducer;
