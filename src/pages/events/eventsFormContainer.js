import {connect} from "react-redux";
import EventsForm from "./eventsForm";
import {loadEvents, loadSports} from "../../database/redux/events-reducer";
const mapStateToProps = (state) => {
    return {
        thisEvents: state.eventsReducer.storeEvents
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadEvents: (text) => {
            dispatch(loadEvents(text));
        },
        loadSports: (text) => {
            dispatch(loadSports(text));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(EventsForm);