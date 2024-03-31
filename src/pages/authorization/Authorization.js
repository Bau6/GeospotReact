import AuthorizationCss from "./AuthorizationCss.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
const Authorization = (props) => {
    const handleLogin = () => {
        props.loginUser();
    };

    // props.logoutUser();
    return (
        <div>
            <div className={AuthorizationCss.containerAuthorization}>
                <label className={AuthorizationCss.label_login}>
                    Введите логин (почту)
                </label>
                <input className={AuthorizationCss.input_login}></input>
                <label className={AuthorizationCss.label_pass}>
                    Введите пароль
                </label>
                <input className={AuthorizationCss.input_pass}></input>
                <NavLink onClick={handleLogin} className={AuthorizationCss.button_auth} to="/../../pages/profile/Profile.js">Авторизация</NavLink>
                <NavLink className={AuthorizationCss.button_reg} to="/../../pages/registration/Registration.js">Регистрация</NavLink>
            </div>
        </div>
    )
}

export default Authorization;