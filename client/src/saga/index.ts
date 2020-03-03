
import { all } from "redux-saga/effects";

import { messageSaga } from "./message";


export function* rootSaga() {
    yield all([ ...messageSaga, ]);
}
