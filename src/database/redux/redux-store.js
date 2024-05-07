import {combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import infoUsersReducer from "./infoUsers-reducer";
import usersReducer from "./users-reducer";
import UsersPageReducer from "./users-page-reducer";
import AuthReducer from "./authActions";
import sessionReducer from "./sessionUser";
import newsReducer from "./news-reducer";
import eventsReducer from "./events-reducer";
import locationUserReducer from "./locationUserReducer";
const persistedSessionState = localStorage.getItem('sessionState');
const initialState = persistedSessionState ? JSON.parse(persistedSessionState) : {};
let reducers = combineReducers({
    infoUsers: infoUsersReducer,
    users: usersReducer,
    usersPage: UsersPageReducer,
    auth: AuthReducer,
    sessionUser: sessionReducer,
    newsReducer: newsReducer,
    eventsReducer: eventsReducer,
    locationUser: locationUserReducer
});
// Фильтруем начальное состояние, оставляем только необходимые ключи
const filteredInitialState = {
    auth: initialState.auth,
    sessionUser: initialState.sessionUser
};
const store = configureStore({
    reducer: reducers,
    preloadedState: filteredInitialState
});
// Сохраняем только необходимые данные о сессии в localStorage
store.subscribe(() => {
    console.log(store.getState());
    const { auth, sessionUser } = store.getState();
    localStorage.setItem('sessionState', JSON.stringify({ auth, sessionUser }));
});
export default store;