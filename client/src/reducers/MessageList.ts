
import { Act } from "../actions";
import { Message } from "../types/Message";

export function MessageListReducer(
    state: Array<Message> = [],
    action: Act<Array<Message>>
): Array<Message> {
    switch (action.type) {
        case "GetNewMessage": {
            const messages = action.payload;
            return [...state, ...messages];
        }
        case "GetAllMessages": {
            const messages = action.payload;
            return messages
        }
        default: {
            return state;
        }
    }
}
