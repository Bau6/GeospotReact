const LOAD_EVENTS = "LOAD_EVENTS";
const CLEAR = "CLEAR";
let initialState = {
    storeEvents: {id: 1, sport: "", orgID: "", orgName: "", nameEvent: "", country: "", city: "", descriptionEvent: "", gender: "", minAge: "", maxAge: "", dateStart: "", dateFinish: "", cntPlayersInGroup: "", rating: "", image: ""}
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS:
            return {...state, storeEvents: action.payload}
        case CLEAR:
            return {
                ...state,
                storeEvents: {id: 1, portTypeID: "", orgID: "", orgName: "", nameEvent: "", country: "", city: "", descriptionEvent: "", gender: "", minAge: "", maxAge: "", dateStart: "", dateFinish: "", cntPlayersInGroup: "", rating: "", image: ""}
            };
        default:
            return state;
    }
};
export const loadEvents = (text) => ({
    type: LOAD_EVENTS,
    payload: text
});
export const clearEvents = () => ({
    type: CLEAR
});
export default eventsReducer;