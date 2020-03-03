import { MessageBeforeSend, Message } from "../types/Message";
import { Action } from "typescript-fsa";

export enum ActionKind {
    // Http
    GetNewMessagesRequest = "GET_NEW_MESSAGES_REQUEST",
    GetAllMessagesRequest = "GET_ALL_MESSAGES_REQUEST",
    SendMessageRequest = "SEND_MESSAGE_REQUEST",
    // MessageList
    GotNewMessages = "GOT_NEW_MESSAGES",
    GotAllMessages = "GOT_ALL_MESSAGES",
    // Input
    ChangedNameInput = "CHANGE_NAME_INPUT",
    ClearNameInput = "CLEAR_NAME_INPUT",
    // TextArea
    ChangedMessageArea = "CHANGE_MESSAGE_AREA",
    ClearMessageArea = "CLEAR_MESSAGE_AREA",
    SentMessage = "SENT_MESSAGE",
}

// Http
export function getNewMessagesRequestAction(): Action<{}> {
    return {
        type: ActionKind.GetNewMessagesRequest,
        payload: {}
    };
}

export function getAllMessagesRequestAction(): Action<{}> {
    return {
        type: ActionKind.GetAllMessagesRequest,
        payload: {}
    };
}

export function sendMessageRequestAction(
    message: MessageBeforeSend
): Action<MessageBeforeSend> {
    return {
        type: ActionKind.SendMessageRequest,
        payload: message
    };
}

// MessageList
export function gotNewMessagesAction(
    messages: Array<Message>
): Action<Array<Message>> {
    return {
        type: ActionKind.GotNewMessages,
        payload: messages
    }
}

export function gotAllMessagesAction(
    messages: Array<Message>
): Action<Array<Message>> {
    return {
        type: ActionKind.GotAllMessages,
        payload: messages
    };
}

// Input
export function changedNameInputAction(
    name: string
): Action<string> {
    return {
        type: ActionKind.ChangedNameInput,
        payload: name
    };
}
export function clearNameInputAction(): Action<{}> {
    return {
        type: ActionKind.ClearNameInput,
        payload: {}
    }
}

// TextArea
export function changedMessageAreaAction(
    content: string
): Action<string> {
    return {
        type: ActionKind.ChangedMessageArea,
        payload: content
    };
}

export function clearMessageAreaAction(): Action<{}> {
    return {
        type: ActionKind.ClearMessageArea,
        payload: {}
    };
}

export function sentMessageAction(
    message: MessageBeforeSend
): Action<MessageBeforeSend> {
    return {
        type: ActionKind.SentMessage,
        payload: message
    }
}
