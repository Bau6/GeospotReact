import React from "react";
import {connect} from "react-redux";
import {setUsersAC} from "../../database/redux/users-page-reducer";
import Users from "./users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);