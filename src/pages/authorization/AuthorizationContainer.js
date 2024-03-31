import {connect} from "react-redux";
import Authorization from "./Authorization";
import {login, logout} from "../../database/redux/authActions";
import {
    clearSessionActionCreator,
    onEmailLoginActionCreator, onPassLoginActionCreator,
    setSessionActionCreator
} from "../../database/redux/sessionUser";
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.user,
        myInf: state.sessionUser.dataLogin,
        isAuthenticated: state.isAuthenticated
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onPassLoginChange: (text) => {
            dispatch(onPassLoginActionCreator( text ));
        },
        onEmailLoginChange: (text) => {
            dispatch(onEmailLoginActionCreator( text ));
        },
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
export default connect (mapStateToProps, mapDispatchToProps)(Authorization);