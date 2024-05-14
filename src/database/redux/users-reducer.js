import axios from "axios";

const USERS = 'USERS';
const TEAMS = 'TEAMS';
const TEAMS_USER = 'TEAMS_USER';
const NEW_TEAM = 'NEW_TEAM';
const NAME_NEW_TEAM = 'NAME_NEW_TEAM';
const SELECT_TEAM = 'SELECT_TEAM';
let initialState = {
    usersTourney: [],
    teams: {},
    newTeam: {},
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS:
            return {...state, usersTourney: action.text}
        case TEAMS:
            return {...state, teams: action.text}
        case NEW_TEAM:
            return {...state, newTeam: action.text}
        case NAME_NEW_TEAM:
            return {...state, newTeam: {...state.newTeam, name: action.text}}
        case SELECT_TEAM:
            return {...state, selectTeam: action.text}
        default:
            return state;
    }
}
export const usersLoadForTourney = (text) => ({
    type: USERS,
    text: text,
});
export const teamsLoadForTourney = (text) => ({
    type: TEAMS,
    text: text,
});
export const addNewUserInTeam = (text) => ({
    type: TEAMS_USER,
    text: text,
});
export const onChangeActionCreatorTeam = (type, value) => ({
    type: type,
    text: value
})

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
export const teamsLoadForEvent = (eventId) => {
    return dispatch => {
        axios.get('http://localhost:3003/load-teams-for-event', {
            params: {
                eventId: eventId,
            }
        })
            .then(responseUsers => {
                dispatch(teamsLoadForTourney(responseUsers.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export const blockUserEvent = (eventId) => {//load-users-for-event
    return dispatch => {
        axios.put('http://localhost:3003/block-user-event', {
            params: {
                eventId: eventId,
            }
        })
            .then(response => {
                if (response.data.message) {
                    alert("Запись обновлена!")
                    window.location.href = "http://localhost:3000/pages/events/events.js"
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export const unBlockUserEvent = (eventId) => {//load-users-for-event
    return dispatch => {
        axios.put('http://localhost:3003/un-block-user-event', {
            params: {
                eventId: eventId,
            }
        })
            .then(response => {
                if (response.data.message) {
                    alert("Запись обновлена!")
                    window.location.href = "http://localhost:3000/pages/events/events.js"
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export const createTeam = (eventID, userID, nameTeam) => {
    return dispatch => {
        axios.put('http://localhost:3003/new-team', {
            params: {
                event_id: eventID,
                userId: userID,
                name: nameTeam,
                status: 1,
            }
        })
            .then(response => {
                if (response.data.error) {
                    alert(response.data.error)
                } else if (response.data.message) {
                    alert(response.data.message)
                } else {alert("Непредвиденная ошибка!")}
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export default usersReducer;