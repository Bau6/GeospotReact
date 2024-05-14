import {connect} from "react-redux";
import checkingPlayersOnTourney from "./checkingPlayersOnTourney";
import {blockUserEvent, unBlockUserEvent, usersLoadForTourney} from "../../database/redux/users-reducer";
const mapStateToProps = (state) => {
    return {
        event: state.eventsReducer.event,
        myUsers: state.users.usersTourney,
        role: state.sessionUser.role,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        users: (text) => {
            dispatch(usersLoadForTourney(text))
        },
        blockUserEvent: (eventId) => {
            dispatch(blockUserEvent(eventId))
        },
        unBlockUserEvent: (eventId) => {
            dispatch(unBlockUserEvent(eventId))
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(checkingPlayersOnTourney);