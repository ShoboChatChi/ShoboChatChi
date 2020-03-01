
import { Act } from "../actions";

export function NameInputReducer(
    state = "",
    action: Act<string | {}>
): string {
    switch (action.type) {
        case "ChangedNameInput": {
            if (typeof action.payload === "string") {
                return action.payload;
            } else {
                return state;
            }
        }
        case "ClearNameInput": {
            return "";
        }
        default: {
            return state;
        }
    }
}
