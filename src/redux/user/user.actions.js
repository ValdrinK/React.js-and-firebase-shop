import userActionType from "./user.actionTypes";

export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payload: user
});

export const googleSignInStart = () => ({
  type: userActionType.GOOGLE_SIGN_IN_START
});

export const SignInSuccesful = user => ({
  type: userActionType.SIGN_IN_SUCCESFUL,
  payload: user
});

export const SignInError = error => ({
  type: userActionType.SIGN_IN_ERROR,
  payload: error
});

export const emailSignIn = emailAndPasword => ({
  type: userActionType.EMAIL_SIGN_IN_START,
  payload: emailAndPasword
});

export const checkUserSession = () => ({
  type: userActionType.CHECK_USER_AUTH
});

export const userSignOutStart = () => ({
  type: userActionType.SIGN_OUT_START
});

export const userSignOutSuccesful = () => ({
  type: userActionType.SIGN_OUT_SUCCESFUL
});

export const userSignOutError = error => ({
  type: userActionType.SIGN_OUT_ERROR,
  payload: error
});

export const registerUser = emailPassword => ({
  type: userActionType.REGISTER_USER,
  payload: emailPassword
});
