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
            this.props.loadDataUser(this.props.myInf.email, this.props.myInf.password);
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
            return <Navigate to="/../../pages/profile/ProfilePage.js" />;
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