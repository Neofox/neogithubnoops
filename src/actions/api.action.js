import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE
} from "../constants/actionsTypes";

export const fetching = () => ({ type: API_REQUEST });
export const success = response => ({ type: API_SUCCESS, response });
export const error = response => ({ type: API_FAILURE, response });
