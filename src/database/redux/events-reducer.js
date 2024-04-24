import {addDays} from "date-fns";
// import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";

const LOAD_EVENTS = "LOAD_EVENTS";
const LOAD_SPORTS = "LOAD_SPORTS";
const CLEAR = "CLEAR";
const LOAD_END_DATA = "LOAD_END_DATA";
const LOAD_START_DATA = "LOAD_START_DATA";
let initialState = {
    sports: "",
    storeEvents: {
        id: 1,
        sport: "",
        orgID: "",
        orgName: "",
        nameEvent: "",
        country: "",
        city: "",
        descriptionEvent: "",
        gender: "",
        minAge: "",
        maxAge: "",
        dateStart: "",
        dateFinish: "",
        cntPlayersInGroup: "",
        rating: "",
        image: ""
    },
    data: {
        startData: new Date().toISOString(),
        endData: addDays(new Date(), 7).toISOString(),
    },
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS:
            return {...state, storeEvents: action.payload}
        case LOAD_SPORTS:
            return {...state, sports: action.sportsLoad}
        case LOAD_START_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    startData: action.startDate // предполагается, что action содержит endDate
                }
            };
        case LOAD_END_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    endData: action.endDate // предполагается, что action содержит endDate
                }
            };
        case CLEAR:
            return {
                ...state,
                sports: "",
                storeEvents: {
                    id: 1,
                    sport: "",
                    orgID: "",
                    orgName: "",
                    nameEvent: "",
                    country: "",
                    city: "",
                    descriptionEvent: "",
                    gender: "",
                    minAge: "",
                    maxAge: "",
                    dateStart: "",
                    dateFinish: "",
                    cntPlayersInGroup: "",
                    rating: "",
                    image: ""
                },
                data: {
                    startData: new Date().toISOString(),
                    endData: addDays(new Date(), 7).toISOString(),
                },
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
export const loadStartData = (text) => ({
    type: LOAD_START_DATA,
    startDate: text
});
export const loadEndData = (text) => ({
    type: LOAD_END_DATA,
    endDate: text
});
export const clearEvents = () => ({
    type: CLEAR
});
export default eventsReducer;