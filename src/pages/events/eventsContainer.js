import {connect} from "react-redux";
import Events from "./events";
const mapStateToProps = (state) => {
    return {
        sports: state.eventsReducer.sports
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Events);