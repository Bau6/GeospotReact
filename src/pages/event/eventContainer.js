import {connect} from "react-redux";
import event from "./event";
import myImage from '../../app/images/icone.png';
import {loadEvent} from "../../database/redux/locationUserReducer";
const mapStateToProps = (state) => {
    return {
        thisEvents: state.eventsReducer.storeEvents.events,
        // chooseSport: state.eventsReducer.sports,
        event: state.eventsReducer.event,
        myImage: myImage,
        states: state,
        eventId: state.eventsReducer.chooseEvent,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadEvent: (id)=> {
            dispatch(loadEvent(id));
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(event);