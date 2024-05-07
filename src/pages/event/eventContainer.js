import {connect} from "react-redux";
import event from "./event";
import myImage from '../../app/images/icone.png';
import {loadEvent} from "../../database/redux/locationUserReducer";
import {registrationTourney} from "../../database/redux/events-reducer";
import {usersLoadForEvent} from "../../database/redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        thisEvents: state.eventsReducer.storeEvents.events,
        event: state.eventsReducer.event,
        myImage: myImage,
        states: state,
        eventId: state.eventsReducer.chooseEvent,
        userID: state.sessionUser.userID,
        status: state.eventsReducer.statusEvent,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadEvent: (id) => {
            dispatch(loadEvent(id));
        },
        registrationTourney: (eventId, userId) => {
            dispatch(registrationTourney(eventId, userId))
        },
        thisUsersLoadForEvent: (eventId) => {
            dispatch(usersLoadForEvent(eventId))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(event);