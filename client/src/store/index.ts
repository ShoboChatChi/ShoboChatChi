
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { rootRecuder } from "../reducers";

export const store = createStore(rootRecuder, applyMiddleware(thunk));

export type ShoboDispath = typeof store.dispatch;
