import React from 'react';
import "./changeInfProfile.css";
import RegistrationCss from "../registration/RegistrationCss.module.css";
import {NavLink} from "react-router-dom";
import FormFields from "./InfoUserProfile";
import profileCss from "./ProfileCss.module.css";
import button from "../../assets/css/button.module.css";
import eventCss from "../event/event.module.css";
import FirstPageCss from "../first_page/first_page.module.css";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество", "", "", "Город", "Страна"];
        // this.labelData = ["Дата рождения"];
        this.reffs = {};
        this.cnt = 0;
        this.labels.forEach(label => {
            this.reffs[this.cnt] = React.createRef();
            this.cnt += 1;
        });
        this.state = {
            editMode: false,
            users: []
        };
    }

    outputInfo = () => {
    }

    componentDidMount() {
        if (this.props.sessionUser.userID === "" || this.props.sessionUser.userID === null || !this.props.sessionUser.userID.id) {
            alert("Ошибка! Страница не существует! Обратитесь в техподдержку!")
        } else {
            this.props.UserLocation(window.location.href, this.props.sessionUser.userID.id);
        }
    }

    handleCancelClick = () => {
        this.setState({editMode: false});
    };

    handleEditClick = () => {
        this.setState({editMode: true});
    };

    countryChange = () => {
        let newText = this.reffs[8].current.value;
        this.props.onCountryChange(newText);
    };

    cityChange = () => {
        let newText = this.reffs[9].current.value;
        this.props.onCityChange(newText);
    };

    render() {
        return (
            <div className={profileCss.containerProfile}>
                <h2 className={FirstPageCss.h2Css}> Профиль </h2>
                {this.props.isLoggedIn ? (
                    <div>
                        {this.state.editMode ? (
                            <div>
                                <h2 className={FirstPageCss.h2Css}>
                                    Изменение информации
                                </h2>
                                <div className={eventCss.containerEvent}>
                                    <div className={eventCss.row}>
                                        <div className={eventCss.col}>
                                            <div className={eventCss.companyDetails}>
                                                <div>
                                                    <div>
                                                        <div className={RegistrationCss.containerReg}>
                                                            <FormFields
                                                                myInf={this.props.userInf}
                                                                refs={this.reffs}
                                                                users={this.state.users}
                                                                onEmailChange={this.props.onEmailChange}
                                                                onPassChange={this.props.onPassChange}
                                                                onRepassChange={this.props.onRepassChange}
                                                                onNameChange={this.props.onNameChange}
                                                                onSurnameChange={this.props.onSurnameChange}
                                                                onPatronymicChange={this.props.onPatronymicChange}
                                                            />
                                                            <div>
                                                                <label
                                                                    className={RegistrationCss.nameLabelInputButtonReg}>
                                                                    {this.labels[8]}
                                                                </label>
                                                                <input
                                                                    ref={this.reffs[8]}
                                                                    className={RegistrationCss.nameLabelButtonReg}
                                                                    onChange={this.countryChange}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    className={RegistrationCss.nameLabelInputButtonReg}>
                                                                    {this.labels[9]}
                                                                </label>
                                                                <input
                                                                    ref={this.reffs[9]}
                                                                    className={RegistrationCss.nameLabelButtonReg}
                                                                    onChange={this.cityChange}
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink onClick={() => {
                                }} className={`${button.buttonsInfo}`}
                                         to="/../../pages/first_page/first_page.js">Сохранить изменения</NavLink>
                                {/*<button className={`${button.buttonsInfo}`}>Изменить аватар</button>*/}
                                <button className={`${button.buttonsInfo}`} onClick={this.handleCancelClick}>Назад
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className={eventCss.containerEvent}>
                                    <div className={eventCss.row}>
                                        <div className={eventCss.col}>
                                            <div className={eventCss.companyDetails}>
                                                <div>
                                                    <label className={RegistrationCss.nameLabelInputButtonProf}>
                                                        {this.labels[0] + ": "}
                                                    </label>
                                                    <label
                                                        className={RegistrationCss.nameLabelInputButtonProf}
                                                    >
                                                        {this.props.userInf &&
                                                        this.props.userInf.email ?
                                                            this.props.userInf.email : ''}
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className={RegistrationCss.nameLabelInputButtonProf}>
                                                        {this.labels[3] + ": "}
                                                    </label>
                                                    <label
                                                        className={RegistrationCss.nameLabelInputButtonProf}
                                                    >
                                                        {this.props.userInf &&
                                                        this.props.userInf.nameUser ?
                                                            this.props.userInf.nameUser : ''}
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className={RegistrationCss.nameLabelInputButtonProf}>
                                                        {this.labels[4] + ": "}
                                                    </label>
                                                    <label
                                                        className={RegistrationCss.nameLabelInputButtonProf}
                                                    >
                                                        {this.props.userInf &&
                                                        this.props.userInf.surnameUser ?
                                                            this.props.userInf.surnameUser : ''}
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className={RegistrationCss.nameLabelInputButtonProf}>
                                                        {this.labels[5] + ": "}
                                                    </label>
                                                    <label
                                                        className={RegistrationCss.nameLabelInputButtonProf}
                                                    >
                                                        {this.props.userInf &&
                                                        this.props.userInf.patronymicUser ?
                                                            this.props.userInf.patronymicUser : ''}
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className={RegistrationCss.nameLabelInputButtonProf}>
                                                        {this.labels[8] + ": "}
                                                    </label>
                                                    <label
                                                        className={RegistrationCss.nameLabelInputButtonProf}
                                                    >
                                                        {this.props.userInf &&
                                                        this.props.userInf.city ?
                                                            this.props.userInf.city : ''}
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className={RegistrationCss.nameLabelInputButtonProf}>
                                                        {this.labels[9] + ": "}
                                                    </label>
                                                    <label
                                                        className={RegistrationCss.nameLabelInputButtonProf}
                                                    >
                                                        {this.props.userInf &&
                                                        this.props.userInf.country ?
                                                            this.props.userInf.country : ''}
                                                    </label>
                                                </div>
                                                {/*<p>Name: {formData.firstName} {formData.lastName} {formData.patronymic}</p>*/}
                                                {/*<p>Password: {formData.password}</p>*/}
                                                <button className={`${button.buttonsInfo}`}
                                                        onClick={this.handleEditClick}>Изменить информацию
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : <div>
                    <div className={eventCss.containerEvent}>
                        <div className={eventCss.row}>
                            <div className={eventCss.col}>
                                <div className={eventCss.companyDetails}>Страница не найдена!</div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default ProfilePage;