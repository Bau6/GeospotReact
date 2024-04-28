import React from "react";


const LOAD_EVENTS = "LOAD_EVENTS";
const LOAD_SPORTS = "LOAD_SPORTS";
const CLEAR = "CLEAR";
const LOAD_DATA = "LOAD_DATA";
const SPORTS ="SPORTS";
const SET_SELECTED_SPORTS = 'SET_SELECTED_SPORTS';
const REF = "REF";
const CHECK = "CHECK";
const QUALIFICATIONS = "QUALIFICATIONS";

let initialState = {
    sports: "",
    storeEvents: {
        events: "",
        sports: [{name:"", id:0}],
    },
    qualifications: [],
    selectedSports: [],
    checked: Array(0).fill(false),
    refsArray: Array(0).fill(null),
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
                qualifications: [],
                selectedSports: [],
                checked: Array(0).fill(false),
                refsArray: Array(0).fill(null),
                data: 0,
            };
        case SET_SELECTED_SPORTS:
            return {
                ...state,
                selectedSports: action.sports,
            };
        // case REF:
        //     return {
        //         ...state,
        //         refsArray: action.refs,
        //     };
        case CHECK:
            return {
                ...state,
                checked: action.checked,
            };
        case QUALIFICATIONS:
            return {
                ...state,
                qualifications: action.qualifications
            }
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
export const qualificationsLoad = (text) => ({
    type: QUALIFICATIONS,
    qualifications: text
});
export const clearEvents = () => ({
    type: CLEAR
});
export const setSelectedSports = ( sports) => ({
    type: SET_SELECTED_SPORTS,
    sports: sports,
});
export const checkedFunc = ( checked) => ({
    type: CHECK,
    checked: checked,
});
// export const refArrayFunc = ( refs) => ({
//     type: REF,
//     refs: refs,
// });
export default eventsReducer;