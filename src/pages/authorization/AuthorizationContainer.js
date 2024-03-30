import {connect} from "react-redux";
import Authorization from "./Authorization";
import {login, logout} from "../../database/redux/authActions";
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
export default connect (mapStateToProps, mapDispatchToProps)(Authorization);