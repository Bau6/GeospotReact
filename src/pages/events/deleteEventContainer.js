import {connect} from "react-redux";
import {deleteEventPage, onChangeActionCreator} from "../../database/redux/events-reducer";
import deleteEvent from "./deleteEvent";
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
            dispatch(onChangeActionCreator(type, text))
        },
        deleteEvent: (event) => {
            dispatch(deleteEventPage(event))
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(deleteEvent);