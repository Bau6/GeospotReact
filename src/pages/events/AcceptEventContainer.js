import {connect} from "react-redux";
import {UserLocation} from "../../database/redux/locationUserReducer";
import {
    clearNewEvent,
    onChangeActionCreator, saveEvent, updateEvent
} from "../../database/redux/events-reducer";
import AcceptEvent from "./AcceptEvent";
const mapStateToProps = (state) => {
    return {
        role: state.sessionUser.role,
        sports: state.eventsReducer.storeEvents.sports,
        thisEvents: state.eventsReducer.storeEvents.events,
        thisNewEvent: state.eventsReducer.newEvent,
        userID: state.sessionUser.userID,
        cities: state.eventsReducer.cities,
        countries: state.eventsReducer.countries,
        gender: state.eventsReducer.genders,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserLocation: (text) => {
            dispatch(UserLocation(text))
        },
        onChangeAreaText: (type, text) => {
            dispatch(onChangeActionCreator(type, text))
        },
        clearAreaText: () => {
            dispatch(clearNewEvent())
        },
        saveEvent: (text) => {
            dispatch(saveEvent(text))
        },
        updateEvent: (text) => {
            dispatch(updateEvent(text))
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(AcceptEvent);