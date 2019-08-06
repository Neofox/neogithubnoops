import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE
} from "../constants/actionsTypes";

export const initialState = {
  status: null,
  response: null
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case API_REQUEST:
      return { ...initialState, status: API_REQUEST };
    case API_SUCCESS:
      return { ...state, status: API_SUCCESS, response: action.response };
    case API_FAILURE:
      return { ...state, status: API_FAILURE, response: action.response };
    default:
      return state;
  }
};

export default reducer;
