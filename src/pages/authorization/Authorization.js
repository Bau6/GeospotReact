import React, {useEffect} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import AuthorizationCss from "./AuthorizationCss.module.css";

const Authorization = (props) => {
    const refs = [React.createRef(), React.createRef()];
    const navigate = useNavigate(); // Использование useNavigate
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    useEffect(() => {
        if (refs[1].current) {
            refs[1].current.type = 'password';
        }
    }, [refs]);

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
        return passwordRegex.test(password);
    }
    const handleLogin = () => {
        let errorMessage = '';
        if (!validateEmail(refs[0].current.value)) {
            errorMessage += "Пожалуйста, введите корректный Email.\n";
        }
        if (!validatePassword(refs[1].current.value)) {
            errorMessage += "Пароль должен содержать от 6 до 20 символов, включать латинские буквы нижнего и верхнего регистров, а также цифры.\n";
        }
        if (errorMessage==='') {
            let CheckDataToDB = {
                email: props.myInf.email,
                password: props.myInf.password,
            };
        // Добавить GET запрос при нажатии на NavLink "Авторизация"
        axios.get("http://localhost:3003/check-login-pass", {
            params: {
            nameTable: 'users',
            params: CheckDataToDB}
        })
            .then(response => {
                // console.log(response.data);

                // Проверяем результат ответа
                if (response.data.error) {
                    // Выводим сообщение об ошибке пользователю
                    alert(response.data.error);
                } else {
                    // Если пользователь найден, выполняем необходимые действия
                    props.loginUser();
                    props.setSession(CheckDataToDB);
                    // Перенаправление на страницу профиля после успешной авторизации
                    navigate("/../../pages/profile/Profile.js");
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
            });}else{
            alert(errorMessage);
        }
    };
    const emailChange = () => {
        let newText = refs[0].current.value;
        props.onEmailLoginChange(newText);
    }
    const passChange = () => {
        let newText = refs[1].current.value;
        props.onPassLoginChange(newText);
    }
    return (
        <div>
            <div className={AuthorizationCss.containerAuthorization}>
                <label className={AuthorizationCss.label_login}>
                    Введите логин (почту)
                </label>
                <input
                    onChange={emailChange}
                    className={AuthorizationCss.input_login}
                    ref={refs[0]}
                ></input>

                <label className={AuthorizationCss.label_pass}>
                    Введите пароль
                </label>
                <input
                    onChange={passChange}
                    className={AuthorizationCss.input_pass}
                    ref={refs[1]}
                ></input>
                {/*<NavLink onClick={handleLogin} className={AuthorizationCss.button_auth}*/}
                {/*         to="/../../pages/profile/Profile.js">Авторизация</NavLink>*/}
                <button onClick={handleLogin} className={AuthorizationCss.button_auth}>Авторизация</button>
                <NavLink className={AuthorizationCss.button_reg}
                         to="/../../pages/registration/Registration.js">Регистрация</NavLink>
            </div>
        </div>
    );
};

export default Authorization;