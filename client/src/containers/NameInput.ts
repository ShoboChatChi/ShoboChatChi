
import { connect } from "react-redux";
import { ShoboDispath } from "../types/Dispatch";

import { changedNameInputAction } from "../actions";
import Input from "../components/Input";
import { RootState } from "../reducers";

function mapStateToProps(state: RootState) {
    return {
        value: state.NameInputReducer,
        type: "text",
    };
}

function mapDispatchToProps(dispatch: ShoboDispath) {
    return {
        handleChange: (name: string) => {
            dispatch(changedNameInputAction(name));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

