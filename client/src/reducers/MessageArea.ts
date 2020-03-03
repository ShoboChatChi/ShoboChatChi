
import { Action } from "typescript-fsa";

import { ActionKind } from "../actions";

export function MessageAreaReducer(
    state: string = "",
    action: Action<string | {}>
): string {
    switch (action.type) {
        case ActionKind.ChangedMessageArea: {
            if (typeof action.payload === "string") {
                return action.payload;
            } else {
                return state;
            }
        }
        case ActionKind.ClearMessageArea: {
            return "";
        }
        default: {
            return state;
        }
    }
}
