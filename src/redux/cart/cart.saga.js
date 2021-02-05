import { all, call, put, takeLatest } from "redux-saga/effects";
import { clearCart } from "./cart.action";

import userActionType from "../user/user.actionTypes";

//workers

export function* clearCartWorker() {
  yield put(clearCart());
}

//watchers

export function* clearCartWatcher() {
  yield takeLatest(userActionType.SIGN_OUT_SUCCESFUL, clearCartWorker);
}

export function* cartSaga() {
  yield all([call(clearCartWatcher)]);
}
