import {connect} from "react-redux";
import {
    blockUserEvent,
    loadResultsTeamTourney,
    unBlockUserEvent,
    usersLoadForTourney
} from "../../database/redux/users-reducer";
import teams from "./teams";
const mapStateToProps = (state) => {
    return {
        event: state.eventsReducer.event,
        myTeams: state.users.teams,
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
export default connect (mapStateToProps, mapDispatchToProps)(teams);