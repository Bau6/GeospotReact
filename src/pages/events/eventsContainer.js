import {connect} from "react-redux";
import Events from "./events";
// import {loadEvents} from "../../database/redux/events-reducer";
import {UserLocation} from "../../database/redux/locationUserReducer";
const mapStateToProps = (state) => {
    return {
        sports: state.eventsReducer.sports
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserLocation: (text) => {
            dispatch(UserLocation(text))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Events);