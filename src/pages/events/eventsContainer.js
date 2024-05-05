import {connect} from "react-redux";
import Events from "./events";
import {UserLocation} from "../../database/redux/locationUserReducer";
import {
    loadCities,
    loadCountries,
} from "../../database/redux/events-reducer";
const mapStateToProps = (state) => {
    return {
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
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Events);