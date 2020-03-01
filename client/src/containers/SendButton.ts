import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
    MessageBeforeSend,
    isMessageBeforeSend,
    isCompleted } from "../types/Message";
import {
    Act,
    sendMessageAction,
    clearMessageAreaAction,
    clearNameInputAction } from "../actions";
import Button from "../components/Button";
import { RootState } from "../reducers";

function mapStateToProps(state: RootState) {
    return {
        payload: {
            name: state.NameInputReducer,
            content: state.MessageAreaReducer,
        },
        value: "Send",
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        handleClick: (message: unknown) => {
            if (isMessageBeforeSend(message) &&
                isCompleted(message)) {
                dispatch(sendMessageAction(message));
                dispatch(clearMessageAreaAction());
                dispatch(clearNameInputAction());
            }
        }
    }
}

export default connect(
    mapStateToProps,
)(Button);
