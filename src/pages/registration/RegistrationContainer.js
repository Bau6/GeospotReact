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
import {checkedFunc, initializeStore, refArrayFunc, setSelectedSports} from "../../database/redux/events-reducer";



let mapStateToProps = (state) => {
    // debugger
    return {
        sports: state.eventsReducer.storeEvents.sports,
        userExampleInfo: state.infoUsers.userExampleInfo,
        myInf: state.infoUsers.userExampleInfo,
        isLoggedIn: state.auth.isLoggedIn,
        isAuthenticated: state.sessionUser.isAuthenticated,
        sportsDB: state.eventsReducer.selectedSports,
        checked: state.eventsReducer.checked,
        refsArray: state.eventsReducer.refsArray,
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
        registrationsLoadDataUser: (role, sports) => {
            dispatch(registrationsLoadDataUser(role, sports));
        },
        selectedSportsFunc: (checked) => {
            dispatch(setSelectedSports(checked));
        },
        loadSportsFunc: (text) => {
            dispatch(initializeStore(text))
        },
        refsArrayFunc: (text) => {
            dispatch(refArrayFunc(text));
        },
        checkedFunc: (text) => {
            dispatch(checkedFunc(text));
        },
    }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;