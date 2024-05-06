import {connect} from "react-redux";
import {onChangeActionCreator} from "../../database/redux/events-reducer";
import adminOrgEvents from "./AdminOrgEvents";
const mapStateToProps = (state) => {
    return {
        role: state.sessionUser.role,
        thisEvents: state.eventsReducer.storeEvents.events,
        chooseSport: state.eventsReducer.sports,
        data: state.eventsReducer.data,
        log: state.auth.isLoggedIn,
        userID: state.sessionUser.userID,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeAreaText: (type, text) => {
            dispatch(onChangeActionCreator(type, text))
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(adminOrgEvents);