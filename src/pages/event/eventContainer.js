import {connect} from "react-redux";
import event from "./event";
import myImage from '../../app/images/icone.png';
import {loadEvent} from "../../database/redux/locationUserReducer";
import {registrationTourney} from "../../database/redux/events-reducer";
import { addPlayers,
    createTeam,
    onChangeActionCreatorTeam, onChangeActionCreatorTeamId,
    teamsLoadForEvent,
    usersLoadForEvent
} from "../../database/redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        thisEvents: state.eventsReducer.storeEvents.events,
        event: state.eventsReducer.event,
        myImage: myImage,
        states: state,
        myTeams: state.users.teams,
        eventId: state.eventsReducer.chooseEvent,
        userID: state.sessionUser.userID,
        status: state.eventsReducer.statusEvent,
        newTeam: state.users.newTeam,
        selectTeam: state.users.selectTeam,
        selectTeamId: state.users.selectTeamId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadEvent: (id) => {
            dispatch(loadEvent(id));
        },
        registrationTourney: (eventId, userId) => {
            dispatch(registrationTourney(eventId, userId))
        },
        thisUsersLoadForEvent: (eventId) => {
            dispatch(usersLoadForEvent(eventId))
        },
        thisTeamsLoadForEvent: (eventId) => {
            dispatch(teamsLoadForEvent(eventId))
        },
        onChangeAreaText: (type, text) => {
            dispatch(onChangeActionCreatorTeam(type, text))
        },
        onChangeAreaTextTeam: (type, text, id) => {
            dispatch(onChangeActionCreatorTeamId(type, text, id))
        },
        createTeam: (eventID, userID, nameTeam) => {
            dispatch(createTeam(eventID, userID, nameTeam))
        },
        addPlayers: (team_id, user_id) => {
            dispatch(addPlayers(team_id, user_id))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(event);