import {combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import eventsInfoReducer from "./eventsInfo-reducer";
import infoUsersReducer from "./infoUsers-reducer";
import usersReducer from "./users-reducer";
import UsersPageReducer from "./users-page-reducer";

let reducers = combineReducers({
    infoUsers: infoUsersReducer,
    eventsInfo: eventsInfoReducer,
    users: usersReducer,
    usersPage: UsersPageReducer
});

let store = configureStore({reducer: reducers});
export default store;