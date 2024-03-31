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
    onSurnameChangeActionCreator, addDataActionCreator
} from "../../database/redux/infoUsers-reducer";
import Registration from "./Registration";
import {connect} from "react-redux";
import {login, logout} from "../../database/redux/authActions";



let mapStateToProps = (state) => {
    return {
        sportNameFromBD: state.eventsInfo.sportNameFromBD,
        userExampleInfo: state.infoUsers.userExampleInfo,
        myInf: state.infoUsers.userExampleInfo,
        isLoggedIn: state.auth.isLoggedIn
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
        loginUser: () => {
            dispatch(login());
        },
        logoutUser: () => {
            dispatch(logout());
        },
        addDataDb: (nameTable, params) => {
            dispatch(addDataActionCreator(nameTable, params));
        }
    }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;