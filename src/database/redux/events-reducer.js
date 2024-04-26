import React from "react";
import {loadSportsFunc} from "./locationUserReducer";

const LOAD_EVENTS = "LOAD_EVENTS";
const LOAD_SPORTS = "LOAD_SPORTS";
const CLEAR = "CLEAR";
const LOAD_DATA = "LOAD_DATA";
const SPORTS ="SPORTS";
const SET_SELECTED_SPORTS = 'SET_SELECTED_SPORTS';
const REF = "REF";
const CHECK = "CHECK";
export const initializeStore = () => {
    return (dispatch) => {
        dispatch(loadSportsFunc());
    };
};
let initialState = {
    sports: "",
    storeEvents: {
        events: "",
        sports: [{name:"", id:0}],
    },
    selectedSports: "",
    checked: "",
    refsArray: "",
    data: 0,
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS:
            return {...state, storeEvents: action.payload}
        case LOAD_SPORTS:
            return {...state, sports: action.sportsLoad}
        case SPORTS:
            return {...state, storeEvents: {sports: action.sport}}
        case LOAD_DATA:
            return {
                ...state,
                data:  action.startDate // предполагается, что action содержит endDate
            };

        case CLEAR:
            return {
                ...state,
                sports: "",
                storeEvents: {
                    events: "",
                    sports: [{name:"", id:0}],
                },
                selectedSports: "",
                checked: "",
                refsArray: "",
                data: 0,
            };
        case SET_SELECTED_SPORTS:
            return {
                ...state,
                selectedSports: action.checked.map(() => true),
            };
        case REF:
            return {
                ...state,
                checked: action.checked,
            };
        case CHECK:
            return {
                ...state,
                refsArray: action.checked,
            };
        default:
            return state;
    }
};
export const loadEvents = (text) => ({
    type: LOAD_EVENTS,
    payload: text
});
export const loadSports = (text) => ({
    type: LOAD_SPORTS,
    sportsLoad: text
});
export const loadData = (text) => ({
    type: LOAD_DATA,
    startDate: text
});
export const sportsLoad = (text) => ({
    type: SPORTS,
    sport: text
});
export const clearEvents = () => ({
    type: CLEAR
});
export const setSelectedSports = ( checked) => ({
    type: SET_SELECTED_SPORTS,
    checked: checked,
});
export const checkedFunc = ( checked) => ({
    type: CHECK,
    checked: checked,
});
export const refArrayFunc = ( checked) => ({
    type: REF,
    checked: checked,
});
export default eventsReducer;