
import { call, put, takeEvery } from "redux-saga/effects";
import { Action } from "typescript-fsa";

import { MessageBeforeSend } from "../types/Message";
import { ActionKind } from "../actions";
import { postMessage, getAllMessages } from "../http";
import { Message } from "../types/Message";


export function* GetNewMessagesRequestHandler() {
    yield null;
}

export function* getAllMessageReqestHandler() {
    const resp = yield call(getAllMessages);
    console.log(resp);
    yield null;
}

export function* sendMessageRequestHandler(
    action: Action<MessageBeforeSend>
) {
    let { payload } = action;
    const resp = yield call(postMessage, payload);
    console.log(resp);
    yield null;
}

export const messageSaga = [
    takeEvery(
        ActionKind.SendMessageRequest,
        sendMessageRequestHandler),
    takeEvery(
        ActionKind.GetAllMessagesRequest,
        getAllMessageReqestHandler),
];
