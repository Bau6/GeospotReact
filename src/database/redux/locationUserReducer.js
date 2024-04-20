import axios from "axios";
import {loadEvents} from "./events-reducer";

const LOCATION = 'LOCATION';

let initialState = {
    location: ""
}

const UsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCATION:
            return {...state, location: action.payload};
        default:
            return state;
    }
}


export const UserLocation = (text) => {
    return (dispatch) => {
        dispatch({
            type: LOCATION,
            payload: text
        });
        if (text === "http://localhost:3000/pages/events/events.js") {
        axios.get('http://localhost:3003/events-table')
            .then(responseEvents => {
                // Вызываем другой action creator для загрузки данных
                dispatch(loadEvents(responseEvents.data));
            })
            .catch(error => {
                console.log(error);
            });}
    };
};


export default UsersPageReducer;