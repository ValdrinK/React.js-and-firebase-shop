const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHING_START":
      return {
        ...state,
        isFetching: true
      };

    case "FETCHING_SUCCESFUL":
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };

    case "FETCHING_ERROR":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
