import "./changeInfProfile.css";
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {
    changeRegDataActionCreator,
    onDateChangeActionCreator, onEmailChangeActionCreator, onNameChangeActionCreator, onPassChangeActionCreator,
    onPatronymicChangeActionCreator, onRepassChangeActionCreator, onSurnameChangeActionCreator, onCityChangeActionCreator,
    onCountryChangeActionCreator
} from "../../database/redux/infoUsers-reducer";
import {UserLocation} from "../../database/redux/locationUserReducer";
const mapStateToProps = (state) => {
    return {
        userInf: state.infoUsers.userExampleInfo,
        sessionUser: state.sessionUser,
        isLoggedIn: state.auth.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(onDateChangeActionCreator( text ));
        },
        addData: (text) => {
            dispatch(changeRegDataActionCreator( text ));
        },
        onPatronymicChange: (text) => {
            dispatch(onPatronymicChangeActionCreator( text ));
        },
        onSurnameChange: (text) => {
            dispatch(onSurnameChangeActionCreator( text ));
        },
        onNameChange: (text) => {
            dispatch(onNameChangeActionCreator( text ));
        },
        onRepassChange: (text) => {
            dispatch(onRepassChangeActionCreator( text ));
        },
        onPassChange: (text) => {
            dispatch(onPassChangeActionCreator( text ));
        },
        onEmailChange: (text) => {
            dispatch(onEmailChangeActionCreator( text ));
        },
        onCityChange: (text) => {
            dispatch(onCityChangeActionCreator( text ));
        },
        onCountryChange: (text) => {
            dispatch(onCountryChangeActionCreator( text ));
        },
        UserLocation: (text, id) => {
        dispatch(UserLocation(text, id))
    },
    }
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
export default ProfilePageContainer;