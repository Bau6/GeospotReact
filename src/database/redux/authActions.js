import axios from "axios";
import {setRoleActionCreator, setSessionActionCreator} from "./sessionUser";
// import {defaultNewNewsActionCreator} from "./news-reducer";

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const initialState = {
    isLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};
export const login = () => {
    return {
        type: LOGIN,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
export const checkUserData = (email, password) => {
    return (dispatch) => {
        let errorMessage = '';
        if (!validateEmail(email)) {
            errorMessage += "Пожалуйста, введите корректный Email.\n";
        }
        if (!validatePassword(password)) {
            errorMessage += "Пароль должен содержать от 6 до 20 символов, включать латинские буквы нижнего и верхнего регистров, а также цифры.\n";
        }
        if (errorMessage === '') {
            axiosUsersLogin(dispatch, email, password);
            // window.location.href = 'http://localhost:3000/pages/profile/ProfilePage.js';
        } else {
            alert(errorMessage);
        }
    }
}

export const axiosUsersLogin = (dispatch, email, password) => {
    let CheckDataToDB = {
        email: email,
        password: password,
    };
    axios.get("http://localhost:3003/check-login-pass", {
        params: {
            nameTable: 'users',
            params: CheckDataToDB
        }
    })
        .then(response => {
            const userData = response.data;
            if (response.data.error) {
                alert(response.data.error);
            } else {
                dispatch(login());
                dispatch(setSessionActionCreator({
                    id: userData.id,
                    email: userData.email,
                    name: userData.surname + " " + userData.name + " " + userData.patronymic
                }));
                dispatch(setRoleActionCreator(userData.id));
                getUserRole(userData.id, dispatch);
                window.location.href = 'http://localhost:3000/pages/profile/ProfilePage.js';
            }
        })
        .catch(error => {
            if (error.response) {
                alert("Неправильный пароль или логин.");
            } else if (error.request) {
                alert("Произошла ошибка при отправке запроса. Пожалуйста, проверьте ваше подключение к сети.");
            } else {
                alert("Произошла неизвестная ошибка. Пожалуйста, обратитесь в службу поддержки.");
            }
        });
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
    return passwordRegex.test(password);
}

function getUserRole(userId, dispatch) {
    axios.get("http://localhost:3003/role", {
        params: {
            nameTable: 'userroles',
            params: userId
        }
    })
        .then(response => {
            const roleData = response.data;
            dispatch(setRoleActionCreator(roleData.nameRole));
        })
        .catch(error => {
            console.log(error);
        });
}

export const registrationsLoadDataUser = (addDataToDB, sports) => {
    return (dispatch) => {
        axios.post("http://localhost:3003/add-record", {
            nameTable: "users",
            fParams: {
                params: addDataToDB,
                sports: sports,
            }
        })
            .then(response => {
                axiosUsersLogin(dispatch, addDataToDB.email, addDataToDB.password);
                // dispatch(setRoleActionCreator("user"));
                alert("Вы успешно зарегистрированы!");
                // window.location.href = 'http://localhost:3000/pages/profile/ProfilePage.js';
            })
            .catch(error => {
                if (error.response.data.error) {
                    alert("ERROR\n Обратитесь в техподдержку!");
                } else {
                    alert("An error occurred");
                }
            });
    }
}
export default AuthReducer;