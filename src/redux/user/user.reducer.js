import userActionType from "./user.actionTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionType.SIGN_IN_SUCCESFUL:
      return {
        currentUser: action.payload,
        error: null
      };
    case userActionType.SIGN_OUT_SUCCESFUL:
      return {
        currentUser: null,
        error: null
      };

    case userActionType.SIGN_OUT_ERROR:
    case userActionType.SIGN_IN_ERROR:
      return {
        currentUser: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
