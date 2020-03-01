import { MessageBeforeSend, Message } from "../types/Message";
import { getAllMessages, postMessage } from "../http";
import { Dispatch } from "redux";

export enum ActKindEnum {
// MessageList
    GetNewMessage,
    GetAllMessages,
// Input
    ChangedNameInput,
    ClearNameInput,
// TextArea
    ChangedMessageArea,
    ClearMessageArea,
    SendMessage,
}

export type ActKind = keyof typeof ActKindEnum;

export interface Act<Payload> {
    type: ActKind
    payload: Payload
}

// MessageList
export function GetNewMessageAction(
    messages: Array<Message>
): Act<Array<Message>> {
    return {
        type: "GetNewMessage",
        payload: messages
    }
}

export function getAllMessagesAction() {
    return async (dispatch: Dispatch<Act<Array<Message>>>) => {
        try {
            const messages = await getAllMessages();
            dispatch({
                type: "GetAllMessages",
                payload: messages
            });
        } catch (err) {
            console.log(err);
        }
    }
}

// Input
export function changedNameInputAction(name: string): Act<string> {
    return {
        type: "ChangedNameInput",
        payload: name
    };
}
export function clearNameInputAction(): Act<{}> {
    return {
        type: "ClearNameInput",
        payload: {}
    }
}

// TextArea
export function changedMessageAreaAction(content: string): Act<string> {
    return {
        type: "ChangedMessageArea",
        payload: content
    };
}

export function clearMessageAreaAction(): Act<{}> {
    return {
        type: "ClearMessageArea",
        payload: {}
    };
}

export function sendMessageAction(message: MessageBeforeSend) {
    return async (dispatch: Dispatch<Act<boolean>>) => {
        try {
            const status = await postMessage(message);
            dispatch({
                type: "SendMessage",
                payload: status
            });
        } catch (err) {
            console.log(err);
        }
    }
}

