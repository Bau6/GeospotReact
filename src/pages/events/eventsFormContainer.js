import {connect} from "react-redux";
import EventsForm from "./eventsForm";
import {onChangeActionCreator} from "../../database/redux/events-reducer";
const mapStateToProps = (state) => {
    return {
        thisEvents: state.eventsReducer.storeEvents.events,
        chooseSport: state.eventsReducer.sports,
        data: state.eventsReducer.data,
        log: state.auth.isLoggedIn,
        role: state.sessionUser.role,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeAreaText: (type, text) => {
            dispatch(onChangeActionCreator(type, text))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(EventsForm);