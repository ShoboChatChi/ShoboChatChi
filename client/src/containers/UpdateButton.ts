import { connect } from "react-redux";

import { getAllMessagesRequestAction } from "../actions";
import ShoboButton from "../components/ShoboButton";
import { ShoboDispath } from "../types/Dispatch";


function mapStateToProps() {
    return {
        payload: {},
        value: "Update",
    };
}

function mapDispatchToProps(dispatch: ShoboDispath) {
    return {
        handleClick: () => {
            dispatch(getAllMessagesRequestAction());
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShoboButton);
