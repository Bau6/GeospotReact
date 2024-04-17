const LOAD_EVENTS = "LOAD_EVENTS";
let initialState = {
    sportNameFromBD: [
        {id: 1, name: 'Баскетбол'}
    ],
    storeEvents: {eventID: "", portTypeID: "", orgID: "", nameEvent: "", country: "", city: "", descriptionEvent: "", gender: "", minAge: "", maxAge: "", dateStart: "", dateFinish: "", cntPlayersInGroup: "", rating: "", image: ""}
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS:
            return {...state, storeEvents: action.payload}
        default:
            return state;
    }
};
export const loadEvents = (text) => ({
    type: LOAD_EVENTS,
    payload: text
});
export default eventsReducer;