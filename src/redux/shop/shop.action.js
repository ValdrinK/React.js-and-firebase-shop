import { shopActionTypes } from "./shop.action.types";

export const fetchingStart = () => ({
  type: shopActionTypes.FETCHING_START
});

export const fetchingSuccesful = updateCollections => ({
  type: shopActionTypes.FETCHING_SUCCESFUL,
  payload: updateCollections
});

export const fetchingError = error => ({
  type: shopActionTypes.FETCHING_ERROR,
  payload: error
});
