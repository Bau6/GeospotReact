const LOAD_EVENTS = "LOAD_EVENTS";
const LOAD_SPORTS = "LOAD_SPORTS";
const CLEAR = "CLEAR";
let initialState = {
    sportNameFromBD: [
        {id: 1, name: 'Баскетбол'}
    ],
    storeEvents: {eventID: 0, portTypeID: "", orgID: "", orgName: "", nameEvent: "", country: "", city: "", descriptionEvent: "", gender: "", minAge: "", maxAge: "", dateStart: "", dateFinish: "", cntPlayersInGroup: "", rating: "", image: ""}
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS:
            return {...state, storeEvents: action.payload}
        case LOAD_SPORTS:
            return {...state,sportNameFromBD: action.payload}
        case CLEAR:
            return {
                ...state,
                sportNameFromBD: [
                    {id: 1, name: 'Баскетбол'}
                ],
                storeEvents: {eventID: 0, portTypeID: "", orgID: "", orgName: "", nameEvent: "", country: "", city: "", descriptionEvent: "", gender: "", minAge: "", maxAge: "", dateStart: "", dateFinish: "", cntPlayersInGroup: "", rating: "", image: ""}
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
    payload: text
});
export const clearEvents = () => ({
    type: CLEAR
});
export default eventsReducer;