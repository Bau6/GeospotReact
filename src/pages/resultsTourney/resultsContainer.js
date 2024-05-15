import {connect} from "react-redux";
import {UserLocation} from "../../database/redux/locationUserReducer";
import {
    loadCities,
    loadCountries, loadGenders, loadSports,
} from "../../database/redux/events-reducer";
import resultsTourney from "./resultsTourney";
const mapStateToProps = (state) => {
    return {
        role: state.sessionUser.role,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserLocation: (text) => {
            dispatch(UserLocation(text))
        },
        loadCities: () => {
            dispatch(loadCities())
        },
        loadCountries: () => {
            dispatch(loadCountries())
        },
        loadSports: () => {
            dispatch(loadSports())
        },
        loadGenders: () => {
            dispatch(loadGenders())
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(resultsTourney);