import {connect} from "react-redux";
import resultsTourney from "./resultsTourney";
const mapStateToProps = (state) => {
    return {
        role: state.sessionUser.role,
        myUsers: state.users.usersTourney,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect (mapStateToProps, mapDispatchToProps)(resultsTourney);