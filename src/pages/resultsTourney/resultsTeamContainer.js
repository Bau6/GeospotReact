import {connect} from "react-redux";
import {UserLocation} from "../../database/redux/locationUserReducer";
import {
    loadCities,
    loadCountries, loadGenders, loadSports,
} from "../../database/redux/events-reducer";
import resultsTeam from "./resultsTeam";
const mapStateToProps = (state) => {
    return {
        event: state.eventsReducer.event,
        myTeams: state.users.teams,
        role: state.sessionUser.role,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(resultsTeam);