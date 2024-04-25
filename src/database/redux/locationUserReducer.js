import axios from "axios";
import {loadEvents} from "./events-reducer";
import {defaultNewNewsActionCreator, loadNews} from "./news-reducer";
import {authUserInfo} from "./infoUsers-reducer";

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


export const UserLocation = (text, id) => {
    return (dispatch) => {
        dispatch({
            type: LOCATION,
            payload: text
        });
        if (text === "http://localhost:3000/pages/events/events.js" || text === "http://localhost:3000/pages/registration/Registration.js") {
        axios.get('http://localhost:3003/events-table')
            .then(responseEvents => {
                // Вызываем другой action creator для загрузки данных
                dispatch(loadEvents(responseEvents.data));
            })
            .catch(error => {
                console.log(error);
            });
        } else if (text === "http://localhost:3000/pages/first_page/first_page.js") {
            axios.get('http://localhost:3003/output-table', {
                params: {
                    nameTable: 'news',
                    params: {}
                }
            })
                .then(responseNews => {
                    dispatch(loadNews(responseNews.data));
                })
                .catch(error => {
                    console.log(error);
                });
        } else if (text === "http://localhost:3000/pages/profile/ProfilePage.js") {
            axios.get('http://localhost:3003/output-one-record', {
                params: {
                    nameTable: 'users',
                    params: id
                }
            })
                .then(responseUser => {
                    dispatch(authUserInfo(responseUser.data));
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };
};

export const addNewsUser = (id, status) => {
    return dispatch => {
        axios.get("http://localhost:3003/update-record", {
            params: {
                nameTable: 'news',
                params: { id: id, status: status }
            }
        })
            .then(response => {
                if (status === 1) {
                    alert("Успешно опубликовано!");
                } else if (status === 7) {
                    alert("Успешно удалено!");
                }
                console.log(response.data);
                // Вызовите другой action для обновления состояния newsList
                // dispatch(updateNewsList(updatedNewsList));
            })
            .catch(error => {
                console.error(error);
            });
    }
}

export const addNewsOrg = (newNews) => {
    return dispatch => {
        axios.post('http://localhost:3003/add-news', {
            nameTable: 'news',
            params: newNews,
        })
            .then(response => {
                alert("Данные успешно добавлены");
                // console.log(response.data);
                dispatch(defaultNewNewsActionCreator());
            })
            .catch(error => {
                alert("Проверьте правильность написания даты!\nDD.MM.YYYY или dd-mm-yyyy");
                console.error(error);
            });
    }
}


export default UsersPageReducer;