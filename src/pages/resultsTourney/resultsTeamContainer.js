import {connect} from "react-redux";
import {UserLocation} from "../../database/redux/locationUserReducer";
import {
    loadCities,
    loadCountries, loadGenders, loadSports,
} from "../../database/redux/events-reducer";
import resultsTeam from "./resultsTeam";
import {
    loadPlayersTeam, onChangeActionCreatorTeamDropDownMenu,
    onChangeActionCreatorTourneyDropDownMenu, updateResultEvent, updateTeamResultEvent,
    usersLoadForEvent
} from "../../database/redux/users-reducer";
const mapStateToProps = (state) => {
    return {
        event: state.eventsReducer.event,
        myTeams: state.users.teams,
        role: state.sessionUser.role,
        resultsTeam: state.users.resultsTeam,
        selectResultTourneyTeamId: state.users.selectResultTourneyTeamId,
        selectResultTourneyTeam: state.users.selectResultTourneyTeam,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadPlayersTeam: (id) => {
            dispatch(loadPlayersTeam(id));
        },
        onChangeAreaTextTeam: (type, text, id, participantId) => {
            dispatch(onChangeActionCreatorTeamDropDownMenu(type, text, id, participantId))
        },
        updateResultEvent: (idE, idR) => {
            dispatch(updateTeamResultEvent(idE, idR))
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(resultsTeam);