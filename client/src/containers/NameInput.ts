import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Act, changedNameInputAction } from "../actions";
import Input from "../components/Input";
import { RootState } from "../reducers";

function mapStateToProps(state: RootState) {
    return {
        value: state.NameInputReducer,
        type: "text",
    };
}

function mapDispatchToProps(dispatch: Dispatch<Act<string>>) {
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

