import {connect} from "react-redux";
import EventsForm from "./eventsForm";
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
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(EventsForm);