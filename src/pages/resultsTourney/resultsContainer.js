import {connect} from "react-redux";
import resultsTourney from "./resultsTourney";
import {
    loadResultsTourney,
    onChangeActionCreatorTeamDropDownMenu,
    onChangeActionCreatorTourneyDropDownMenu, updateResultEvent
} from "../../database/redux/users-reducer";
import {loadEvent} from "../../database/redux/locationUserReducer";
const mapStateToProps = (state) => {
    return {
        role: state.sessionUser.role,
        myUsers: state.users.usersTourney,
        resultsTourney: state.users.resultTourney,
        selectResultTourney: state.users.selectResultTourney,
        participantResults: state.users.participantResults,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeAreaTextTeam: (text, type, id, participantId) => {
            dispatch(onChangeActionCreatorTourneyDropDownMenu(type, text, id, participantId))
        },
        updateResultEvent: (idE, idR) => {
            dispatch(updateResultEvent(idE, idR))
        },

    }
}
export default connect (mapStateToProps, mapDispatchToProps)(resultsTourney);