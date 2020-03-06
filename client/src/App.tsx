import * as React from "react";
import { Box } from "@material-ui/core";

import MessageList from "./containers/MessageList";
import NameInput from "./containers/NameInput";
import MessageArea from "./containers/MessageArea";
import SendButton from "./containers/SendButton";
import UpdateButton from "./containers/UpdateButton";

export default function App() {
    return (
        <Box>
            <MessageList />
            <NameInput />
            <MessageArea />
            <SendButton />
            <UpdateButton />
        </Box>
    );
};

