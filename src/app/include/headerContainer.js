import {connect} from "react-redux";
import {login, logout} from "../../database/redux/authActions";
import header from "./header";
import {clearSessionActionCreator, setSessionActionCreator} from "../../database/redux/sessionUser";
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => {
            dispatch(login());
        },
        logoutUser: () => {
            dispatch(logout());
        },
        setSession: (userData) => {
            dispatch(setSessionActionCreator(userData));
        },
        clearSession: () => {
            dispatch(clearSessionActionCreator());
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(header);