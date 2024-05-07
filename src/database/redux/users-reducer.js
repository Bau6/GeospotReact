import axios from "axios";
import {citiesActionCreator} from "./events-reducer";

const USERS = 'USERS';
let initialState = {
    usersTourney: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS:
            return {...state, usersTourney: action.text}
        default:
            return state;
    }
}
export const usersLoadForTourney = (text) => ({
    type: USERS,
    text: text,
});

export const usersLoadForEvent = (eventId) => {//load-users-for-event
    return dispatch => {
        axios.get('http://localhost:3003/load-users-for-event', {
            params: {
                eventId: eventId,
            }
        })
            .then(responseUsers => {
                dispatch(usersLoadForTourney(responseUsers.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default usersReducer;