import { connect } from "react-redux";

import {
    isMessageBeforeSend,
    isCompleted
} from "../types/Message";
import {
    sendMessageRequestAction,
    clearMessageAreaAction,
    clearNameInputAction
} from "../actions";
import ShoboButton from "../components/ShoboButton";
import { RootState } from "../reducers";
import { ShoboDispath } from "../types/Dispatch";

function mapStateToProps(state: RootState) {
    return {
        payload: {
            name: state.NameInputReducer,
            content: state.MessageAreaReducer,
        },
        value: "Send",
    };
}

function mapDispatchToProps(dispatch: ShoboDispath) {
    return {
        handleClick: (message: unknown) => {
            if (isMessageBeforeSend(message) &&
                isCompleted(message)) {
                dispatch(sendMessageRequestAction(message));
                dispatch(clearMessageAreaAction());
                dispatch(clearNameInputAction());
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoboButton);
