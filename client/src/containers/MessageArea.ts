import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Act } from "../actions";
import { changedMessageAreaAction } from "../actions";
import TextArea from "../components/TextArea";
import { RootState } from "../reducers";

function mapStateToProps(state: RootState) {
    return {
        value: state.MessageAreaReducer
    };
}

function mapDispatchToProps(dispatch: Dispatch<Act<string>>) {
    return {
        handleChange: (value: string) => {
            return dispatch(changedMessageAreaAction(value));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextArea);
