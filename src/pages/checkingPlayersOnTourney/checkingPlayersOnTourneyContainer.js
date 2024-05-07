import {connect} from "react-redux";
import checkingPlayersOnTourney from "./checkingPlayersOnTourney";
import {usersLoadForTourney} from "../../database/redux/users-reducer";
const mapStateToProps = (state) => {
    return {
        event: state.eventsReducer.event,
        myUsers: state.users.usersTourney,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        users: (text) => {
            dispatch(usersLoadForTourney(text))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(checkingPlayersOnTourney);