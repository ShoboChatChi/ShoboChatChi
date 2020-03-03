
import { Action } from "typescript-fsa";
import { ActionKind } from "../actions";

export function NameInputReducer(
    state = "",
    action: Action<string | {}>
): string {
    switch (action.type) {
        case ActionKind.ChangedNameInput: {
            if (typeof action.payload === "string") {
                return action.payload;
            } else {
                return state;
            }
        }
        case ActionKind.ClearNameInput: {
            return "";
        }
        default: {
            return state;
        }
    }
}
