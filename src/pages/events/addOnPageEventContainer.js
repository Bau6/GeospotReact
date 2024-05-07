import {connect} from "react-redux";
import {addOnPageEventAdmin, onChangeActionCreator} from "../../database/redux/events-reducer";
import addOnPageEvent from "./addOnPageEvent";
const mapStateToProps = (state) => {
    return {
        role: state.sessionUser.role,
        thisEvents: state.eventsReducer.storeEvents.events,
        chooseEvent: state.eventsReducer.chooseEvent,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeAreaText: (type, text) => {
            dispatch(onChangeActionCreator(type, text));
        },
        addOnPageEvent: (event) => {
            dispatch(addOnPageEventAdmin(event));
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(addOnPageEvent);