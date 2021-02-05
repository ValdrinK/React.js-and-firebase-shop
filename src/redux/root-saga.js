import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.saga";
import { userSagas } from "../redux/user/user.saga";
import { cartSaga } from "./cart/cart.saga";

export function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas), call(cartSaga)]);
}
