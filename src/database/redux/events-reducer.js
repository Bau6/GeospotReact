const LOAD_EVENTS = "LOAD_EVENTS";
const LOAD_SPORTS = "LOAD_SPORTS";
const CLEAR = "CLEAR";
const LOAD_DATA = "LOAD_DATA";
const SPORTS ="SPORTS";
let initialState = {
    sports: "",
    storeEvents: {
        events: "",
        sports: [{name:"", id:0}],
    },
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
                data: 0,
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
export default eventsReducer;