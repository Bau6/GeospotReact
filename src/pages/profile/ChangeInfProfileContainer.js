import React from 'react';
import "./changeInfProfile.css";
import ChangeInfProfile from "./ChangeInfProfile";
const ProfilePageContainer = (props) => {
    let state = props.store.getState();
    return (<ChangeInfProfile userInf={state.infoUsers.usersNewInfo}/>);
};

export default ProfilePageContainer;