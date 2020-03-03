import { combineReducers } from "redux";

import { MessageListReducer } from "./MessageList";
import { NameInputReducer } from "./NameInput";
import { MessageAreaReducer } from "./MessageArea";

export const rootRecuder = combineReducers({
    MessageListReducer,
    NameInputReducer,
    MessageAreaReducer,
});

export type RootState = ReturnType<typeof rootRecuder>;

