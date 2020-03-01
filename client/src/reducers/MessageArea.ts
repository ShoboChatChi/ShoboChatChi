
import { Act } from "../actions";

export function MessageAreaReducer(
    state: string = "",
    action: Act<string | {}>
): string {
    switch (action.type) {
        case "ChangedMessageArea": {
            if (typeof action.payload === "string") {
                return action.payload;
            } else {
                return state;
            }
        }
        case "ClearMessageArea": {
            return "";
        }
        default: {
            return state;
        }
    }
}
