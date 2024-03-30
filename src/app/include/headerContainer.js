import {connect} from "react-redux";
import {login, logout} from "../../database/redux/authActions";
import header from "./header";
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => {
            dispatch(login());
        },
        logoutUser: () => {
            dispatch(logout());
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(header);