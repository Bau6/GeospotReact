import {connect} from "react-redux";
import Events from "./events";
import {loadEvents} from "../../database/redux/events-reducer";
const mapStateToProps = (state) => {
    return {
        sports: state.eventsReducer.sports
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadEvents: (text) => {
            dispatch(loadEvents(text));
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Events);