import {connect} from "react-redux";
import Events from "./events";

const mapStateToProps = (state) => {
    return {
        sports: state.eventsReducer.sportNameFromBD
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // setUsers: (users) => {
        //     dispatch(setUsersAC(users));
        // }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Events);