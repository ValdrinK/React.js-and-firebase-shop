import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../root-reducer";
import { fetchCollectionStart } from "../shop/shop.saga";
import { rootSaga } from "../root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default { store, persistor };
