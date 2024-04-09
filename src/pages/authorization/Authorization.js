import React from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import AuthorizationCss from "./AuthorizationCss.module.css";
import axios from 'axios';

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.state = {
            redirectToProfile: false
        };
    }
    componentDidMount() {
        this.setState(prevState => {
            const newRef = this.ref2;
            if (newRef.current) {
                newRef.current.type = 'password';
            }
            return { ref2: newRef };
        }, () => {
            // Дополнительные действия после обновления состояния
            this.emailChange();
            this.passChange();
        });
    }
    validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
        return passwordRegex.test(password);
    }

    handleLogin = () => {
        let errorMessage = '';
        if (!this.validateEmail(this.ref1.current.value)) {
            errorMessage += "Пожалуйста, введите корректный Email.\n";
        }
        if (!this.validatePassword(this.ref2.current.value)) {
            errorMessage += "Пароль должен содержать от 6 до 20 символов, включать латинские буквы нижнего и верхнего регистров, а также цифры.\n";
        }
        if (errorMessage === '') {
            let CheckDataToDB = {
                email: this.props.myInf.email,
                password: this.props.myInf.password,
            };
            // Логика обработки данных и запроса к серверу
            // Добавить GET запрос при нажатии на NavLink "Авторизация"
            axios.get("http://localhost:3003/check-login-pass", {
                params: {
                    nameTable: 'users',
                    params: CheckDataToDB
                }
            })
                .then(response => {
                    // console.log(response.data);
                    // Принимаем данные из ответа
                    const userData = response.data;
                    // Проверяем результат ответа
                    if (response.data.error) {
                        // Выводим сообщение об ошибке пользователю
                        alert(response.data.error);
                    } else {
                        // Если пользователь найден, выполняем необходимые действия

                        this.props.loginUser();
                        this.props.setSession({id: userData.id, email: userData.email, name: userData.surname + " " + userData.name + " " + userData.patronymic});
                        this.props.myUserId(userData.id);
                        axios.get("http://localhost:3003/role", {
                            params: {
                                nameTable: 'userroles',
                                params: userData.id
                            }
                        })
                            .then(response => {
                                const roleData = response.data;
                                this.props.myUserId(roleData.nameRole);
                            })
                            .catch(error => {
                                console.log(error);
                            });
                        // this.props.isLoggedIn = true;
                        // Перенаправление на страницу профиля после успешной авторизации
                        this.setState({ redirectToProfile: true });
                        window.location.href = "/../../pages/profile/Profile.js";

                    }
                })
                .catch(error => {
                    // console.error(error);
                    if (error.response) {
                        // Ошибка с ответом от сервера
                        alert("Неправильный пароль или логин.");
                    } else if (error.request) {
                        // Ошибка отправки запроса
                        alert("Произошла ошибка при отправке запроса. Пожалуйста, проверьте ваше подключение к сети.");
                    } else {
                        // Другие типы ошибок
                        alert("Произошла неизвестная ошибка. Пожалуйста, обратитесь в службу поддержки.");
                    }
                });
        } else {
            alert(errorMessage);
        }
    }

    emailChange = () => {
        let newText = this.ref1.current.value;
        this.props.onEmailLoginChange(newText);
    }

    passChange = () => {
        let newText = this.ref2.current.value;
        this.props.onPassLoginChange(newText);
    }

    render() {
        if (this.state.redirectToProfile) {
            return <Navigate to="/../../pages/profile/Profile.js" />;
        }
        return (
            <div>
                <div className={AuthorizationCss.containerAuthorization}>
                    <label className={AuthorizationCss.label_login}>Введите логин (почту)</label>
                    <input onChange={this.emailChange} className={AuthorizationCss.input_login} ref={this.ref1}></input>
                    <label className={AuthorizationCss.label_pass}>Введите пароль</label>
                    <input onChange={this.passChange} className={AuthorizationCss.input_pass} ref={this.ref2}></input>
                    <button onClick={this.handleLogin} className={AuthorizationCss.button_auth}>Авторизация</button>
                    <NavLink className={AuthorizationCss.button_reg} to="/../../pages/registration/Registration.js">Регистрация</NavLink>
                </div>
            </div>
        );
    }
}

export default Authorization;