import {connect} from "react-redux";
import {login, logout} from "../../database/redux/authActions";
import header from "./header";
import {clearSessionActionCreator, setSessionActionCreator} from "../../database/redux/sessionUser";
import {clearSessionUsersActionCreator} from "../../database/redux/infoUsers-reducer";
import {clearEvents} from "../../database/redux/events-reducer";
import {clearNews} from "../../database/redux/news-reducer";
import myImage from "../images/Geospot.png";
const mapStateToProps = (state) => {
    return {
        myImage: myImage,
        role: state.sessionUser.role,
        user: state.sessionUser.userID,
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
        },
        clearSessionUsers: () => {
            dispatch(clearSessionUsersActionCreator());
        },
        clearEvents: () => {
            dispatch(clearEvents());
        },
        clearNews: () => {
            dispatch(clearNews());
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(header);