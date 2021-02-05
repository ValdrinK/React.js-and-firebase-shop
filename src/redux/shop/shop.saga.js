import { fetchingSuccesful, fetchingError } from "./shop.action";
import {
  firestore,
  convertDataFromFirestore
} from "../../firebase/firebase.utility";
import { shopActionTypes } from "./shop.action.types";

import { takeLatest, call, put } from "redux-saga/effects";

export function* fetchCollectionSaga() {
  console.log("working");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertDataFromFirestore, snapshot);
    yield put(fetchingSuccesful(collectionMap));
  } catch (errorr) {
    yield put(fetchingError(errorr));
  }
}

//watcher saga

export function* fetchCollectionStart() {
  yield takeLatest(shopActionTypes.FETCHING_START, fetchCollectionSaga);
}
