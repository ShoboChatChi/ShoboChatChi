import { connect } from "react-redux";

import { changedMessageAreaAction } from "../actions";
import ShoboTextField from "../components/ShoboTextField";
import { RootState } from "../reducers";
import { ShoboDispath } from "../types/Dispatch";

function mapStateToProps(state: RootState) {
    return {
        value: state.MessageAreaReducer
    };
}

function mapDispatchToProps(dispatch: ShoboDispath) {
    return {
        handleChange: (value: string) => {
            return dispatch(changedMessageAreaAction(value));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoboTextField);
