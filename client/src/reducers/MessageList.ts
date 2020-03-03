
import { Action } from "typescript-fsa";
import { ActionKind } from "../actions";
import { Message } from "../types/Message";

export function MessageListReducer(
    state: Array<Message> = [],
    action: Action<Array<Message>>
): Array<Message> {
    switch (action.type) {
        case ActionKind.GotNewMessages: {
            const messages = action.payload;
            return [...state, ...messages];
        }
        case ActionKind.GotAllMessages: {
            const messages = action.payload;
            return messages
        }
        default: {
            return state;
        }
    }
}
