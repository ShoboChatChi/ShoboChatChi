
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { rootRecuder } from "../reducers";
import { rootSaga } from "../saga";


export function configureStore(initState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootRecuder, initState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}

