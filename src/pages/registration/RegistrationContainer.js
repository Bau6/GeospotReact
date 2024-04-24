// import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {
    onDateChangeActionCreator,
    changeRegDataActionCreator,
    onEmailChangeActionCreator,
    onNameChangeActionCreator,
    onPassChangeActionCreator,
    onPatronymicChangeActionCreator,
    onRepassChangeActionCreator,
    onSurnameChangeActionCreator
} from "../../database/redux/infoUsers-reducer";
import Registration from "./Registration";
import {connect} from "react-redux";
import {login, logout, registrationsLoadDataUser} from "../../database/redux/authActions";
import {
    clearSessionActionCreator,
    setRoleActionCreator,
    setSessionActionCreator
} from "../../database/redux/sessionUser";
import {loadSports} from "../../database/redux/events-reducer";



let mapStateToProps = (state) => {
    return {
        sportNameFromBD: state.eventsReducer.sportNameFromBD,
        userExampleInfo: state.infoUsers.userExampleInfo,
        myInf: state.infoUsers.userExampleInfo,
        isLoggedIn: state.auth.isLoggedIn,
        isAuthenticated: state.sessionUser.isAuthenticated,
    }
}

let mapDispatchToProps = (dispatch) => {
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
        setSession: (userData) => {
            dispatch(setSessionActionCreator(userData));
        },
        loginUser: () => {
            dispatch(login());
        },
        logoutUser: () => {
            dispatch(logout());
        },
        clearSession: () => {
            dispatch(clearSessionActionCreator());
        },
        myUserId: (role) => {
            dispatch(setRoleActionCreator(role));
        },
        registrationsLoadDataUser: (role) => {
            dispatch(registrationsLoadDataUser(role));
        }
    }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;