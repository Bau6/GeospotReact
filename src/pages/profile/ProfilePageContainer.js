// import React from 'react';
import "./changeInfProfile.css";
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
// import Profile from "./Profile";
import {
    changeRegDataActionCreator,
    onDateChangeActionCreator, onEmailChangeActionCreator, onNameChangeActionCreator, onPassChangeActionCreator,
    onPatronymicChangeActionCreator, onRepassChangeActionCreator, onSurnameChangeActionCreator, onCityChangeActionCreator,
    onCountryChangeActionCreator
} from "../../database/redux/infoUsers-reducer";
// const ProfilePageContainer = (props) => {
//     debugger
//     let state = props.store.getState();
//     return (<ProfilePage userInf={state.infoUsers.usersNewInfo}/>);
// };
const mapStateToProps = (state) => {
    return {
        userInf: state.infoUsers.usersNewInfo,
        myInf: state.infoUsers.userExampleInfo
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
        }
    }
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
export default ProfilePageContainer;