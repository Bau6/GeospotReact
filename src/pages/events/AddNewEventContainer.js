import {connect} from "react-redux";
import {UserLocation} from "../../database/redux/locationUserReducer";
import {
    clearNewEvent,
    onChangeActionCreator
} from "../../database/redux/events-reducer";
import addNewEvent from "./addNewEvent";
const mapStateToProps = (state) => {
    return {
        sports: state.eventsReducer.sports,
        thisNewEvent: state.eventsReducer.newEvent,
        userID: state.sessionUser.userID,
        cities: state.eventsReducer.cities,
        countries: state.eventsReducer.countries,
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
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(addNewEvent);