import { takeLatest, put, call, all } from "redux-saga/effects";
import userActionType from "./user.actionTypes";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
  checkUser
} from "../../firebase/firebase.utility";
import {
  SignInSuccesful,
  SignInError,
  userSignOutSuccesful,
  userSignOutError
} from "./user.actions";

//worker

export function* registerWorker({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user, displayName);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccesful({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    put(SignInError(error.message));
  }
}

export function* signOutWorker() {
  try {
    yield auth.signOut();
    yield put(userSignOutSuccesful());
  } catch (error) {
    yield put(userSignOutError(error));
  }
}

export function* checkUserSessionSaga() {
  try {
    const userAuth = checkUser();
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccesful({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(SignInError(error.message));
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccesful({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(SignInError(error));
  }
}

export function* googleSignInSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccesful({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(SignInError(error));
  }
}

//watchers

export function* registerWatcher() {
  yield takeLatest(userActionType.REGISTER_USER, registerWorker);
}

export function* emailSignInSaga() {
  yield takeLatest(userActionType.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* googleSignInStartSaga() {
  yield takeLatest(userActionType.GOOGLE_SIGN_IN_START, googleSignInSaga);
}

export function* checkUserWatcher() {
  yield takeLatest(userActionType.CHECK_USER_AUTH, checkUserSessionSaga);
}

export function* singOutWatcher() {
  yield takeLatest(userActionType.SIGN_OUT_START, signOutWorker);
}

export function* userSagas() {
  yield all([
    call(googleSignInStartSaga),
    call(emailSignInSaga),
    call(checkUserWatcher),
    call(singOutWatcher),
    call(registerWatcher)
  ]);
}
