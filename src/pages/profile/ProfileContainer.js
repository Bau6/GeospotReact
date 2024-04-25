// import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        userInf: state.infoUsers.userExampleInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;