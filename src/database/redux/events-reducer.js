import axios from "axios";
const LOAD_EVENTS = "LOAD_EVENTS";
const LOAD_SPORTS = "LOAD_SPORTS";
const CLEAR = "CLEAR";
const LOAD_DATA = "LOAD_DATA";
const SPORTS ="SPORTS";
const SET_SELECTED_SPORTS = 'SET_SELECTED_SPORTS';
const CHECK = "CHECK";
const QUALIFICATIONS = "QUALIFICATIONS";
const EVENT = "EVENT";
const NAME = 'NAME';
const DATE = 'DATE';
const COUNTRY = 'COUNTRY';
const CITY = 'CITY';
const AUTHOR = 'AUTHOR';
const DESCRIPTION = 'DESCRIPTION';
const IMAGE = 'IMAGE';
const ORGANIZER = 'ORGANIZER';
const CLEAR_NEW_EVENT = "CLEAR_NEW_EVENT";
const CITIES = "CITIES";
const COUNTRIES = "COUNTRIES";
const DATE_START = "DATE_START";
const DATE_END = "DATE_END";
let initialState = {
    sports: "",
    event: "",
    newEvent: {},
    cities: {},
    countries: {},
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
        case NAME:
            return {...state, newEvent: {...state.newEvent, name: action.newText}};
        case DATE_END:
            return {...state, newEvent: {...state.newEvent, dateFinish: action.newText}};
        case DATE_START:
            return {...state, newEvent: {...state.newEvent, dateStart: action.newText}};
        case COUNTRY:
            return {...state, newEvent: {...state.newEvent, country: action.newText}};
        case CITY:
            return {...state, newEvent: {...state.newEvent, city: action.newText}};
        case DESCRIPTION:
            return {...state, newNews: {...state.newNews, description: action.newText}};
        case AUTHOR:
            return {...state, newNews: {...state.newNews, author: action.newText}};
        case IMAGE:
            return {...state, newNews: {...state.newNews, image: action.newText}};
        case CLEAR_NEW_EVENT:
            return {
                ...state,
                newEvent: {},
            }
        case CLEAR:
            return {
                ...state,
                sports: "",
                newEvent: {},
                cities: {},
                countries: {},
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
        case EVENT:
            return {
                ...state,
                event: action.event,
            };
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
        case CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case COUNTRIES:
            return {
                ...state,
                countries: action.payload
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
export const clearNewEvent = () => ({
    type: CLEAR_NEW_EVENT
});
export const setSelectedSports = ( sports) => ({
    type: SET_SELECTED_SPORTS,
    sports: sports,
});
export const checkedFunc = ( checked) => ({
    type: CHECK,
    checked: checked,
});
export const eventInfo = (text) => ({
    type: EVENT,
    event: text,
});
export const onChangeActionCreator = (type, value) => ({
    type: type,
    newText: value
})
export const citiesActionCreator = (value) => ({
    type: CITIES,
    payload: value
})
export const countriesActionCreator = (value) => ({
    type: COUNTRIES,
    payload: value
})
export const loadCities = () => {
    return dispatch => {
        axios.get('http://localhost:3003/cities')
            .then(responseCities => {
                dispatch(citiesActionCreator(responseCities.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export const loadCountries = () => {
    return dispatch => {
        axios.get('http://localhost:3003/countries')
            .then(responseCountries => {
                dispatch(countriesActionCreator(responseCountries.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export default eventsReducer;