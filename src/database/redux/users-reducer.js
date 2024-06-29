import axios from "axios";

const USERS = 'USERS';
const TEAMS = 'TEAMS';
const TEAMS_USER = 'TEAMS_USER';
const NEW_TEAM = 'NEW_TEAM';
const NAME_NEW_TEAM = 'NAME_NEW_TEAM';
const SELECT_TEAM = 'SELECT_TEAM';
const TEAM_PLAYERS = 'TEAM_PLAYERS';
const DROPDOWN_TOURNEY_RESULTS = 'DROPDOWN_TOURNEY_RESULTS';
const SELECT_DROPDOWN_TOURNEY_RESULTS = 'SELECT_DROPDOWN_TOURNEY_RESULTS';
const SELECT_DROPDOWN_TOURNEY_RESULTS_TEAM = 'SELECT_DROPDOWN_TOURNEY_RESULTS_TEAM';
const DROPDOWN_TOURNEY_RESULTS_TEAM = 'DROPDOWN_TOURNEY_RESULTS_TEAM';
let initialState = {
    usersTourney: [],
    teams: {},
    resultsTourney: {},
    resultsTeam: {},
    newTeam: {},
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS:
            return {...state, usersTourney: action.text}
        case TEAMS:
            return {...state, teams: action.text}
        case TEAM_PLAYERS:
            return {...state, players: action.players}
        case NEW_TEAM:
            return {...state, newTeam: action.text}
        case NAME_NEW_TEAM:
            return {...state, newTeam: {...state.newTeam, name: action.text}}
        case SELECT_TEAM:
            return {...state, selectTeam: action.name, selectTeamId: action.id}
        case DROPDOWN_TOURNEY_RESULTS:
            return {...state, resultTourney: action.text}
        case DROPDOWN_TOURNEY_RESULTS_TEAM:
            return {...state, resultsTeam: action.text}
        case SELECT_DROPDOWN_TOURNEY_RESULTS:
            return {...state,
                participantResults: {
                    ...state.participantResults, // Сохраняем существующие результаты
                    [action.participantId]: {
                        name: action.name, // Имя выбранного результата
                        id: action.id, // ID выбранного результата
                    }
                },}
        case SELECT_DROPDOWN_TOURNEY_RESULTS_TEAM:
            return {...state,
                selectResultTourneyTeam: {
                    ...state.selectResultTourneyTeam,
                    [action.participantId]: action.name, // Store result based on participant ID
                    },}
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
export const onChangeActionCreatorTeamPlayers = (type, value) => ({
    type: type,
    text: value
})
export const onChangeActionCreatorTeamId = (value) => ({
    type: TEAM_PLAYERS,
    players: value,
})
export const onChangeActionCreatorTeamDropDownMenu = (type, text, id, participantId) => ({
    type: type,
    id: id,
    name: text,
    participantId: participantId,
})
export const onChangeActionCreatorTourneyDropDownMenu = (type, text, id,participantId) => ({
    type: type,
    id: id,
    name: text,
    participantId: participantId,
})
export const loadResultsTourneyRedux = ( value ) => ({
    type: DROPDOWN_TOURNEY_RESULTS,
    text: value
})
export const loadResultsTourneyTeamRedux = ( value ) => ({
    type: DROPDOWN_TOURNEY_RESULTS_TEAM,
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
export const loadResultsTourney = () => {
    return dispatch => {
        axios.get('http://localhost:3003/load-results-tourney', {
            params: {
            }
        })
            .then(responseUsers => {
                dispatch(loadResultsTourneyRedux(responseUsers.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export const loadResultsTeamTourney = () => {
    return dispatch => {
        axios.get('http://localhost:3003/load-results-tourney-team', {
            params: {
            }
        })
            .then(responseUsers => {
                dispatch(loadResultsTourneyTeamRedux(responseUsers.data));
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
export const loadPlayersTeam = (team_id) => {//load-users-for-event
    return dispatch => {
        axios.put('http://localhost:3003/load-team-players', {
            params: {
                team_id: team_id,
            }
        })
            .then(response => {
                dispatch(onChangeActionCreatorTeamPlayers(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export const addPlayers = (team_id, user_id, sport_id) => {//load-users-for-event
    return dispatch => {
        axios.put('http://localhost:3003/add-player', {
            params: {
                team_id:team_id,
                user_id:user_id,
                sport_id: sport_id,
            }
        })
            .then(response => {
                console.log(response)
                if (response.data.message) {
                    alert(response.data.message)
                    window.location.href = "http://localhost:3000/pages/events/events.js"
                } if (response.data.error) {
                    alert(response.data.error)
                }
            })
            .catch(error => {
                alert(error.data.error)
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
export const updateResultEvent = (eventId, resultId) => {
    return dispatch => {
        axios.put('http://localhost:3003/update-result-event', {
                eventId: eventId,
                resultId: resultId,
        })
            .then(response => {
                if (response.data.message) {
                    alert("Запись обновлена!")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export const updateTeamResultEvent = (eventId, resultId) => {
    return dispatch => {
        axios.put('http://localhost:3003/update-team-result-event', {
                eventId: eventId,
                resultId: resultId,
        })
            .then(response => {
                if (response.data.message) {
                    alert("Запись обновлена!")
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