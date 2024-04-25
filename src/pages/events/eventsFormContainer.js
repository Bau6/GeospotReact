import {connect} from "react-redux";
import EventsForm from "./eventsForm";
import {loadEvents} from "../../database/redux/events-reducer";
const mapStateToProps = (state) => {
    return {
        thisEvents: state.eventsReducer.storeEvents.events,
        chooseSport: state.eventsReducer.sports,
        data: state.eventsReducer.data,
        log: state.auth.isLoggedIn,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadEvents: (text) => {
            dispatch(loadEvents(text));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(EventsForm);