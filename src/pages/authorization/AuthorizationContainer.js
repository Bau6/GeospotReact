import {connect} from "react-redux";
import Authorization from "./Authorization";
import {checkUserData, login, logout} from "../../database/redux/authActions";
import {
    clearSessionActionCreator,
    onEmailLoginActionCreator, onPassLoginActionCreator, setRoleActionCreator,
    setSessionActionCreator
} from "../../database/redux/sessionUser";
// import {clearSessionUsersActionCreator} from "../../database/redux/infoUsers-reducer";
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.user,
        myInf: state.sessionUser.dataLogin,
        isAuthenticated: state.isAuthenticated,
        sessionUser: state.sessionUser
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
        },
        myUserId: (role) => {
            dispatch(setRoleActionCreator(role));
        },
        loadDataUser: (login, pass) => {
            dispatch(checkUserData(login, pass));
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Authorization);