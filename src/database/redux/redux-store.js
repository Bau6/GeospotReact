import {combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import eventsInfoReducer from "./eventsInfo-reducer";
import infoUsersReducer from "./infoUsers-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    infoUsers: infoUsersReducer,
    eventsInfo: eventsInfoReducer,
    users: usersReducer
});

let store = configureStore({reducer: reducers});
export default store;