import { connect } from "react-redux";
import List from "../components/List";
import { RootState } from "../reducers";

function mapStateToProps(state: RootState) {
    return {
        list: state.MessageListReducer
    };
}

export default connect(
    mapStateToProps,
)(List);
