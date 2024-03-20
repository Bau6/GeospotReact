import React from "react";
import Profile from "./Profile";

const ProfileContainer = (props) => {
    debugger
    let state = props.store.getState();
    return (<Profile userInf={state.infoUsers.usersNewInfo}/>)
}

export default ProfileContainer;