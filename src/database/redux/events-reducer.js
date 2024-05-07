import axios from "axios";

const ORG = "ORG";
const ORG_NAME = "ORG_NAME";
const LOAD_EVENTS = "LOAD_EVENTS";
const LOAD_SPORTS = "LOAD_SPORTS";
const CLEAR = "CLEAR";
const LOAD_DATA = "LOAD_DATA";
const SPORTS = "SPORTS";
const SET_SELECTED_SPORTS = 'SET_SELECTED_SPORTS';
const CHECK = "CHECK";
const QUALIFICATIONS = "QUALIFICATIONS";
const EVENT = "EVENT";
const NAME = 'NAME';
const MIN_AGE = 'MIN_AGE';
const MAX_AGE = 'MAX_AGE';
const COUNTRY_ID = 'COUNTRY_ID';
const COUNTRY = 'COUNTRY';
const CITY_ID = 'CITY_ID';
const CITY = 'CITY';
const AUTHOR = 'AUTHOR';
const DESCRIPTION = 'DESCRIPTION';
const IMAGE = 'IMAGE';
const GENDERS = 'GENDERS';
const CLEAR_NEW_EVENT = "CLEAR_NEW_EVENT";
const CITIES = "CITIES";
const COUNTRIES = "COUNTRIES";
const DATE_START = "DATE_START";
const DATE_END = "DATE_END";
const SPORT = "SPORT";
const GENDER = "GENDER";
const SPORT_ID = "SPORT_ID";
const GENDER_ID = "GENDER_ID";
const DESCRIPTION_EVENT = "DESCRIPTION_EVENT";
const CNT_PLAYERS = "CNT_PLAYERS";
const IMAGE_EVENT = "IMAGE_EVENT";
const CHOOSE_EVENT = "CHOOSE_EVENT"
const EVENT_ID = "EVENT_ID";
let initialState = {
    sports: "",
    event: "",
    newEvent: {},
    cities: {},
    genders: {},
    countries: {},
    storeEvents: {
        events: "",
        sports: [{name: "", id: 0}],
    },
    chooseEvent: null,
    qualifications: [],
    selectedSports: [],
    checked: Array(0).fill(false),
    refsArray: Array(0).fill(null),
    data: 0,
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_EVENT:
            return {...state, chooseEvent: action.newText}
        case LOAD_EVENTS:
            return {...state, storeEvents: action.payload}
        case LOAD_SPORTS:
            return {...state, sports: action.sportsLoad}
        case SPORTS:
            return {...state, storeEvents: {sports: action.sport}}
        case LOAD_DATA:
            return {
                ...state,
                data: action.startDate // предполагается, что action содержит endDate
            };
        case NAME:
            return {...state, newEvent: {...state.newEvent, name: action.newText}};
        case ORG:
            return {...state, newEvent: {...state.newEvent, orgId: action.newText}};
        case ORG_NAME:
            return {...state, newEvent: {...state.newEvent, orgName: action.newText}};
        case DESCRIPTION_EVENT:
            return {...state, newEvent: {...state.newEvent, description: action.newText}};
        case IMAGE_EVENT:
            return {...state, newEvent: {...state.newEvent, image: action.newText}};
        case CNT_PLAYERS:
            return {...state, newEvent: {...state.newEvent, cntPlayers: action.newText}};
        case MIN_AGE:
            return {...state, newEvent: {...state.newEvent, minAge: action.newText}};
        case MAX_AGE:
            return {...state, newEvent: {...state.newEvent, maxAge: action.newText}};
        case SPORT:
            return {...state, newEvent: {...state.newEvent, sport: action.newText}};
        case SPORT_ID:
            return {...state, newEvent: {...state.newEvent, sportId: action.newText}};
        case EVENT_ID:
            return {...state, newEvent: {...state.newEvent, eventId: action.newText}};
        case GENDER:
            return {...state, newEvent: {...state.newEvent, gender: action.newText}};
        case GENDER_ID:
            return {...state, newEvent: {...state.newEvent, genderId: action.newText}};
        case DATE_END:
            return {...state, newEvent: {...state.newEvent, dateFinish: action.newText}};
        case DATE_START:
            return {...state, newEvent: {...state.newEvent, dateStart: action.newText}};
        case COUNTRY:
            return {...state, newEvent: {...state.newEvent, country: action.newText}};
        case COUNTRY_ID:
            return {...state, newEvent: {...state.newEvent, countryId: action.newText}};
        case CITY:
            return {...state, newEvent: {...state.newEvent, city: action.newText}};
        case CITY_ID:
            return {...state, newEvent: {...state.newEvent, cityId: action.newText}};
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
                genders: {},
                countries: {},
                storeEvents: {
                    events: "",
                    sports: [{name: "", id: 0}],
                },
                chooseEvent: null,
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
        case GENDERS:
            return {
                ...state,
                genders: action.payload
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
export const setSelectedSports = (sports) => ({
    type: SET_SELECTED_SPORTS,
    sports: sports,
});
export const checkedFunc = (checked) => ({
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
export const gendersActionCreator = (value) => ({
    type: GENDERS,
    payload: value
})

export const saveEvent = (event) => {
    return dispatch => {
        const {
            sportId,
            name,
            countryId,
            cityId,
            description,
            genderId,
            minAge,
            maxAge,
            cntPlayers,
            dateStart,
            dateFinish,
            image,
            orgId
        } = event;
        axios.post('http://localhost:3003/add-event', {
            nameTable: 'events',
            params: {
                sportTypeID: sportId,
                orgID: orgId,
                nameEvent: name,
                country: countryId,
                city: cityId,
                descriptionEvent: description,
                gender: genderId,
                minAge: minAge,
                maxAge: maxAge,
                cntPlayersInGroup: cntPlayers,
                dateStart: new Date(dateStart),
                dateFinish: new Date(dateFinish),
                image: image,
                status: 2,
            },
        })
            .then(response => {
                alert("Данные успешно добавлены");
                console.log(response.data);
                dispatch(clearNewEvent());
            })
            .catch(error => {
                alert("ERROR! Данные не добавлены! Обратитесь в техподдержку!!!");
                console.error(error);
            });
    }
}
export const registrationTourney = (eventId, userId) => {
    return dispatch => {
        axios.post('http://localhost:3003/registration-user-on-tourney', {
            params:{
                userId: userId,
                eventId: eventId,
            }
        })
            .then(response => {
                alert("Вы успешно зарегистрированы!");
            })
            .catch(error => {
                alert(error.response.data.error)
            });
    }
}
export const updateEvent = (event) => {
    return dispatch => {
        const {
            eventId,
            sportId,
            name,
            countryId,
            cityId,
            description,
            genderId,
            minAge,
            maxAge,
            cntPlayers,
            dateStart,
            dateFinish,
            image,
            orgId
        } = event;
        axios.put("http://localhost:3003/update-event", {
            nameTable: 'events',
            params: {
                id: eventId,
                data: {
                    sportTypeID: sportId,
                    orgID: orgId,
                    nameEvent: name,
                    country: countryId,
                    city: cityId,
                    descriptionEvent: description,
                    gender: genderId,
                    minAge: minAge,
                    maxAge: maxAge,
                    cntPlayersInGroup: cntPlayers,
                    dateStart: new Date(dateStart),
                    dateFinish: new Date(dateFinish),
                    image: image,
                    status: 2,
                }
            },
        })
            .then(response => {
                alert("Данные успешно обновлены");
                console.log(response.data);
                dispatch(clearNewEvent());
            })
            .catch(error => {
                alert("ERROR! Данные не обновлены! Обратитесь в техподдержку!!!");
                console.error(error);
            });
    }
}
export const deleteEventPage = (event) => {
    return dispatch => {
        axios.put("http://localhost:3003/delete-event", {
            nameTable: 'events',
            params: {
                id: event,
                data: {
                    status: 4,
                }
            },
        })
            .then(response => {
                alert("Данные успешно удалены");
                console.log(response.data);
                dispatch(clearNewEvent());
            })
            .catch(error => {
                alert("ERROR! Данные не удалены! Обратитесь в техподдержку!!!");
                console.error(error);
            });
    }
}
export const addOnPageEventAdmin = (event) => {
    return dispatch => {
        axios.put("http://localhost:3003/add-on-page-event", {
            nameTable: 'events',
            params: {
                id: event,
                data: {
                    status: 1,
                }
            },
        })
            .then(response => {
                alert("Данные успешно добавлены");
                console.log(response.data);
                dispatch(clearNewEvent());
            })
            .catch(error => {
                alert("ERROR! Данные не добавлены! Обратитесь в техподдержку!!!");
                console.error(error);
            });
    }
}
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
export const loadGenders = () => {
    return dispatch => {
        axios.get('http://localhost:3003/genders')
            .then(responseGenders => {
                dispatch(gendersActionCreator(responseGenders.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export default eventsReducer;